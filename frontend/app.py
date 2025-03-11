from flask import Flask, render_template, jsonify, request, Response
import threading
from pose_detection import pose_detection, pose_detection_counts, set_current_exercise, stop_pose_detection, pose_detection_active

app = Flask(__name__, static_folder='static', template_folder='templates')

pose_detection_thread = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start_pose_detection', methods=['GET'])
def start_pose_detection_route():
    global pose_detection_thread
    exercise = request.args.get('exercise', 'bicep')
    if pose_detection_active:
        stop_pose_detection()
        pose_detection_thread.join()
    set_current_exercise(exercise)
    pose_detection_thread = threading.Thread(target=pose_detection)
    pose_detection_thread.start()
    return jsonify({'status': 'success'})

@app.route('/stop_pose_detection', methods=['GET'])
def stop_pose_detection_route():
    stop_pose_detection()
    return jsonify({'status': 'success'})

@app.route('/video_feed')
def video_feed():
    return Response(pose_detection(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/pose_counts')
def pose_counts():
    return Response(pose_detection_counts(), mimetype='text/event-stream')

if __name__ == "__main__":
    app.run(debug=True)