import cv2
import mediapipe as mp
from flask import Response, jsonify
from pose_calculations import calculate_bicep_curl, calculate_tricep_extension, calculate_shoulder_press, calculate_deadlift
import time
import json

pose_detection_active = False
current_exercise = None
cap = None


def pose_detection():
    global pose_detection_active, cap, counter, stage, sets, left_reps, right_reps, left_stage, right_stage, left_set, right_set
    pose_detection_active = True

    mp_pose = mp.solutions.pose
    pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)

    cap = cv2.VideoCapture(0)
    counter = 0
    stage = None
    sets = 0

    left_reps = 0
    right_reps = 0
    left_stage = "--"
    right_stage = "--"
    left_set = 0
    right_set = 0

    while cap.isOpened() and pose_detection_active:
        ret, frame = cap.read()
        if not ret:
            break
        
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        image.flags.writeable = False
        result = pose.process(image)
        
        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        
        try:
            landmarks = result.pose_landmarks.landmark
            
            if current_exercise == 'bicep':
                right_reps, left_reps, right_stage, left_stage, right_set, left_set = calculate_bicep_curl(landmarks, image, right_reps, left_reps, right_stage, left_stage, right_set, left_set)
            
            elif current_exercise == 'tricep':
                right_reps, left_reps, right_stage, left_stage, right_set, left_set = calculate_tricep_extension(landmarks, image, right_reps, left_reps, right_stage, left_stage, right_set, left_set)
                
            elif current_exercise == 'shoulder':
                right_reps, left_reps, right_stage, left_stage, right_set, left_set = calculate_shoulder_press(landmarks, image, right_reps, left_reps, right_stage, left_stage, right_set, left_set)
                
            elif current_exercise == 'deadlift':
                right_reps, right_stage, right_set = calculate_deadlift(landmarks, image, counter, stage, sets)
                
        except AttributeError as e:
            print(f"An error occurred: {e}")
            
        # Displaying the landmarks and connections    
        mp.solutions.drawing_utils.draw_landmarks(image, result.pose_landmarks, mp.solutions.pose.POSE_CONNECTIONS,
        mp.solutions.drawing_utils.DrawingSpec(color=(245, 117, 66), thickness=2, circle_radius=2),
        mp.solutions.drawing_utils.DrawingSpec(color=(245, 66, 230), thickness=2, circle_radius=2))
        
        # Encode the frame in JPEG format
        ret, buffer = cv2.imencode('.jpg', image)
        frame = buffer.tobytes()
        
        # Yield the frame in byte format
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()
    pose_detection_active = False

def pose_detection_counts():
    global pose_detection_active, right_reps, left_reps, right_stage, left_stage, right_set, left_set
    while pose_detection_active:
        yield f"data: {json.dumps({'right_reps':right_reps, 'left_reps':left_reps, 'right_stage':right_stage, 'left_stage':left_stage, 'right_set':right_set, 'left_set':left_set})}\n\n"
        time.sleep(1)

def set_current_exercise(exercise):
    global current_exercise, counter, stage, sets, left_reps, right_reps, left_stage, right_stage, left_set, right_set
    current_exercise = exercise
    # Reset counters and stages
    counter = 0
    stage = None
    sets = 0
    left_counter = 0
    right_counter = 0
    left_stage = None
    right_stage = None
    left_set = 0
    right_set = 0

def stop_pose_detection():
    global pose_detection_active, cap
    pose_detection_active = False
    if cap is not None:
        cap.release()
        cap = None