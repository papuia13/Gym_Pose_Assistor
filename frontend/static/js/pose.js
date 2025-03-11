let poseDetectionActive = false;
let repCount = 0;
let setCount = 0;
let isCounting = false;

async function startPoseDetection(exercise) {
    if (poseDetectionActive) {
        alert("Pose detection is already running.");
        return;
    }

    try {
        const response = await fetch(`/start_pose_detection?exercise=${exercise}`, {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            if (data.status === 'success') {
                poseDetectionActive = true;
                document.getElementById('pose-detection-result').innerText = "Pose detection started.";

                // Display the video feed
                const videoFeed = document.createElement('img');
                videoFeed.src = '/video_feed';
                videoFeed.width = 640;
                videoFeed.height = 480;
                videoFeed.style.display = 'block';
                document.getElementById('pose-detection-result').appendChild(videoFeed);

                function updateCountDisplay() {
                    document.getElementById('rep-count').innerText = `Reps: ${repCount}`;
                    document.getElementById('set-count').innerText = `Sets: ${setCount}`;
                }
            } else {
                alert("Pose detection is already running.");
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