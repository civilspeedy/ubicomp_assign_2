// for returning a tone based message based on how much work the user has done

const responses = {
    encoragemet: [],
    disapointment: [],
    content: [],
    happy: [],
    amazed: [],
};

function calculateTone(tasksDone, totalTasks) {

}

function makeResponse(tone) {
    switch (tone) {
        case 'encoragement': return responses.encoragemet[Math.random(0, responses.encoragemet.length())]
        case 'disapointment': return responses.disapointment[Math.random(0, responses.disapointment.length)]
        case 'content': return responses.content[Math.random(0, responses.content.length())]
        case 'happy': return responses.happy[Math.random(0, responses.happy.length())]
        case 'amazed': return responses.amazed[Math.random(0, responses.amazed.length())]
    }
};