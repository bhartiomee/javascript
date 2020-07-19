console.log('This is code.js of cv scanner');

const data = [
    {
        name: 'Omee Bharti',
        age: 20,
        city: 'Ranchi',
        language: 'Javascript',
        framework: 'angulars',
        image: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    {
        name: 'Bhaskar Tripathi',
        age: 18,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/49.jpg'
    },
    {
        name: 'Avinash Mahato',
        age: 18,
        city: 'Delhi',
        language: 'Ruby',
        framework: 'Ruby framework',
        image: 'https://randomuser.me/api/portraits/men/20.jpg'
    },
    {
        name: 'Anshu topno',
        age: 21,
        city: 'Banglore',
        language: 'Java',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/women/49.jpg'
    },
    {
        name: 'Asif Raza',
        age: 20,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    }
]

// console.log(data);

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                {
                    value: profiles[nextIndex++],
                    done: false
                } :
                {
                    done: true
                }
        }
    }
}
const candidates = cvIterator(data)
nextCV();



let next = document.getElementById('next')
next.addEventListener('click', nextCV);

function nextCV() {

    const currentCandiate = candidates.next().value;
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')

    if (currentCandiate != undefined) {
        image.innerHTML = `<img src='${currentCandiate.image}'>`
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: <strong>${currentCandiate.name}</strong></li>
                            <li class="list-group-item"><strong>${currentCandiate.age}</strong> years old</li>
                            <li class="list-group-item">Lives in <strong>${currentCandiate.city}</strong></li>
                            <li class="list-group-item">Currently working on <strong>${currentCandiate.language}</strong></li>
                            <li class="list-group-item">Uses <strong>${currentCandiate.framework}</strong> framework</li>
                         </ul>
                         `
    }
    else{
        alert('No more application to show')
        window.location.reload();
    }
}
// getData();s
