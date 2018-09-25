let data = [
  {
    id: 1,
    easyId: '0001',
    regTime: '2018-08-08',
    features: 'digital'
  },
  {
    id: 2,
      easyId: '0002',
      regTime: '2018-08-08',
      features: 'sport'
  },
  {
    id: 3,
      easyId: '0003',
      regTime: '2018-08-08',
      features: 'car'
  }
];

export default {
  'get /api/cards': function (req, res, next) {
    setTimeout(() => {
      res.json({
        result: data,
      })
    }, 250)
  },
  'delete /api/cards/:id': function (req, res, next) {
    data = data.filter(v => v.id !== parseInt(req.params.id));
    console.log(req.params.id);
    console.log(data);
    setTimeout(() => {
      res.json({
        success: true,
      })
    }, 250)
  },
  'post /api/cards/add': function (req, res, next) {
    console.log(req.body);
    data = [...data, {
      ...req.body,
      id: data[data.length - 1].id + 1,
    }];
    res.json({
      success: true,
    });
  },
  'get /api/cards/:id/statistic': function (req, res, next) {
    res.json({
      result: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 1150 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]
    });
  },
}
