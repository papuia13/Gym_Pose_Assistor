let poseDetectionActive = false;
let isCounting = false;
let eventSource = null;

async function startPoseDetection(exercise) {
    try {
        const response = await fetch(`/start_pose_detection?exercise=${exercise}`, {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            if (data.status === 'success') {
                poseDetectionActive = true;

                // Clear the previous video feed
                document.getElementById('pose-detection-result').innerHTML = '';

                document.getElementById('pose-detection-result').innerText = "Pose detection started.";
                
                // Display the video feed
                const videoFeed = document.createElement('img');
                videoFeed.src = '/video_feed';
                videoFeed.width = 800; // Increase the width of the video feed
                videoFeed.height = 600; // Increase the height of the video feed
                videoFeed.style.display = 'block';
                document.getElementById('pose-detection-result').appendChild(videoFeed);

                // Close any existing EventSource before starting a new one
                if (eventSource) {
                    eventSource.close();
                }

                // Initialize a new EventSource for real-time updates
                eventSource = new EventSource('/pose_counts');
                eventSource.onmessage = function(event) {
                    const data = JSON.parse(event.data);
                    right_reps = data.right_reps;
                    left_reps = data.left_reps;
                    right_stage = data.right_stage;
                    left_stage = data.left_stage;
                    right_set = data.right_set;
                    left_set = data.left_set;
                    
                    updateCountDisplay();
                };

                function updateCountDisplay() {
                    document.getElementById("pose-detection-container").style.display = "flex";
                    
                    document.getElementById('left-stage').innerText = `Left Stage: ${left_stage}`;
                    document.getElementById('left-rep').innerText = `Left Reps: ${left_reps}`;
                    document.getElementById('left-set').innerText = `Left Set: ${left_set}`;

                    document.getElementById('right-stage').innerText = `Right Stage: ${right_stage}`;
                    document.getElementById('right-rep').innerText = `Right Reps: ${right_reps}`;
                    document.getElementById('right-set').innerText = `Right Set: ${right_set}`;
                }
            }
        } else {
            const errorData = await response.json();
            console.error(errorData.message);
        }
    } catch (error) {
        console.error('Error starting pose detection:', error);
    }
}

async function stopPoseDetection() {
    if (!poseDetectionActive) {
        alert("Pose detection is not running.");
        return;
    }

    try {
        const response = await fetch('/stop_pose_detection', {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            if (data.status === 'success') {
                poseDetectionActive = false;
                document.getElementById("pose-detection-container").style.display = "none";
                document.getElementById('pose-detection-result').innerText = "Pose detection stopped.";
                document.getElementById('pose-detection-result').innerHTML = ''; // Clear the video feed

                // Close the EventSource
                if (eventSource) {
                    eventSource.close();
                    eventSource = null; // Reset the eventSource to allow reinitialization
                }
            } else {
                console.error('Error stopping pose detection:', data.message);
            }
        } else {
            const errorData = await response.json();
            console.error(errorData.message);
        }
    } catch (error) {
        console.error('Error stopping pose detection:', error);
    }
}