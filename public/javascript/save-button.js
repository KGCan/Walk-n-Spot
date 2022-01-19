
// async function saveTrail(event) {
//     event.preventDefault();
//     var user_id = 2;
//     var trail_id = document.querySelector('.trail-save-btn').id.trim();
//     console.log(user_id)
//     console.log(trail_id)
//     if (user_id && trail_id) {
//       const response = await fetch('/api/user/usertrail', {
//         method: 'post',
//         body: JSON.stringify({
//           user_id,
//           trail_id
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         console.log('weird')
//       }
//     }
// }



// document.querySelector('.trail-save-btn').addEventListener('click', saveTrail);
