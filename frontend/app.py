from flask import Flask, render_template, jsonify, request, Response
import threading
from pose_detection import pose_detection, set_current_exercise, pose_detection_active

app = Flask(__name__, static_folder='static', template_folder='templates')

pose_detection_thread = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start_pose_detection', methods=['GET'])
def start_pose_detection_route():
    global pose_detection_thread
    exercise = request.args.get('exercise', 'bicep')
    set_current_exercise(exercise)
    if not pose_detection_active:
        pose_detection_thread = threading.Thread(target=pose_detection)
        pose_detection_thread.start()
        return jsonify({'status': 'success'})
    else:
        return jsonify({'status': 'already_running'})

@app.route('/stop_pose_detection', methods=['GET'])
def stop_pose_detection_route():
    global pose_detection_active
    pose_detection_active = False
    return jsonify({'status': 'success'})

@app.route('/video_feed')
def video_feed():
    return Response(pose_detection(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(debug=True)