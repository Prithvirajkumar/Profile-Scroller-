const data = [
    {
        name: 'John Doe',
        age: '32',
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Boston',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: '26',
        gender: 'Femail',
        lookingfor: 'Female',
        location: 'Miami',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Willian Lane',
        age: '33',
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Florida',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
]; 

const profiles = profileIterator(data);

// call first profile 
nextProfile();

// next event lister
document.getElementById('next').addEventListener('click', nextProfile);

// next profile function 
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile != undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.name}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    <li class="list-group-item">Location: ${currentProfile.lookingfor}</li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // no more profile 
        window.location.reload();
    }
}

// Profile iterator 
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} :
            { done: true}
        }
    };
}