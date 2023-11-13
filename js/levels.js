// Levels data
let levels = [];

levels[0] = {
    map: [
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
        [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
        [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
        [0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
        [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
    ],
    player: {
        x: 0,
        y: 15
    },
    goal: {
        x: 15,
        y: 0
    },

    // question: {
    //     // x: 12,
    //     // y: 6,

    q1: {
        qs: 'Who was the Ancient Greek God of the Sun?',
        answer: ['Hermes', 'Apollo', 'Dionysus', 'Zeus'],
        x: 12,
        y: 7,
    },

    q2: {
        qs: 'What year was United Nations established?',
        answer: ['1898', '1918', '1945'],
        x: 7,
        y: 3,
    },

    q3: {
        qs: 'Which planet in the Milky Way is the hottest?',
        answer: ['Venus', 'Mercury'],
        x: 0,
        y: 8,
    },

    qFinal: {
        qs: 'What is the password, which is the meaning of the Life, Universe and Everything?',
        answer: '42',
        x: 10,
        y: 0,
    },
    // },

    theme: 'default',
};

