const mockSegment = [
    {
        title: 'Sport',
        description: 'Just do it.',
    },
    {
        title: 'Young Women',
        description: "Forever young",
    },
    {
        title: 'Digital',
        description: 'Camera',
    },
];

let randomCount = 0;

export default {
        'get /dev/mockSegment': function (req, res) {
        const responseObj = mockSegment[randomCount % mockSegment.length];
        randomCount += 1;
        setTimeout(() => {
            res.json(responseObj);
        }, 3000);
    },
};
