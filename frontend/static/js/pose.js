let poseDetectionActive = false;
let repCount = 0;
let setCount = 0;
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
                document.getElementById('pose-detection-result').innerText = "Pose detection started.";

                // Clear the previous video feed
                document.getElementById('pose-detection-result').innerHTML = '';

                // Display the video feed
                const videoFeed = document.createElement('img');
                videoFeed.src = '/video_feed';
                videoFeed.width = 800; // Increase the width of the video feed
                videoFeed.height = 600; // Increase the height of the video feed
                videoFeed.style.display = 'block';
                document.getElementById('pose-detection-result').appendChild(videoFeed);

                // Update the count display in real-time
                if (eventSource) {
                    eventSource.close();
                }
                eventSource = new EventSource('/pose_counts');
                eventSource.onmessage = function(event) {
                    const data = JSON.parse(event.data);
                    repCount = data.reps;
                    setCount = data.sets;
                    updateCountDisplay();
                };

                function updateCountDisplay() {
                    document.getElementById('rep-count').innerText = `Reps: ${repCount}`;
                    document.getElementById('set-count').innerText = `Sets: ${setCount}`;
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
                document.getElementById('pose-detection-result').innerText = "Pose detection stopped.";
                document.getElementById('pose-detection-result').innerHTML = ''; // Clear the video feed
                if (eventSource) {
                    eventSource.close();
                    eventSource = null;
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