export const tripsDataMock = [
    {
        status: 'ongoing',
        origin: {
            point: { _latitude: 41.38074, _longitude: 2.18594 },
            address: 'Metropolis:lab, Barcelona'
        },
        stops: [
            {
                point: { _latitude: 41.37653, _longitude: 2.17924 },
                id: 1
            },
            {
                point: { _latitude: 41.35179, _longitude: 2.15494 },
                id: 2
            },
            {
                point: { _latitude: 41.43853, _longitude: 2.00094 },
                id: 3
            },
            {
                point: { _latitude: 41.47711, _longitude: 1.91843 },
                id: 4
            }
        ],
        destination: {
            address: 'Seat HQ, Martorell',
            point: { _latitude: 41.49958, _longitude: 1.90307 }
        },
        endTime: '2018-12-18T09:00:00.000Z',
        startTime: '2018-12-18T08:00:00.000Z',
        description: 'Barcelona a Martorell',
        driverName: 'Alberto Morales',
        route:
            'sdq{Fc}iLj@zR|W~TryCzvC??do@jkKeiDxjIccLhiFqiE`uJqe@rlCy~B`t@sK|i@'
    },
    {
        endTime: '2018-12-18T08:45:00.000Z',
        startTime: '2018-12-18T08:00:00.000Z',
        description: 'Barcelona a Sant cugat',
        driverName: 'Joaquin Sabina',
        route: 'sdq{Fc}iLeoBrgBs@xsGecD|sEswEv|Cek@cyA',
        status: 'ongoing',
        origin: {
            address: 'Metropolis:lab, Barcelona',
            point: { _latitude: 41.38074, _longitude: 2.18594 }
        },
        stops: [
            {
                point: { _latitude: 41.39869, _longitude: 2.1692 },
                id: 5
            },
            {
                point: { _latitude: 41.42522, _longitude: 2.09084 },
                id: 6
            }
        ],
        destination: {
            point: { _latitude: 41.46693, _longitude: 2.08006 },
            address: 'Sant Cugat Centre, El Valles'
        }
    },
    {
        origin: {
            address: 'Metropolis:lab, Barcelona',
            point: { _latitude: 41.38074, _longitude: 2.18594 }
        },
        stops: [
            {
                point: { _latitude: 41.42658, _longitude: 2.22688 },
                id: 7
            },
            {
                point: { _latitude: 41.48216, _longitude: 2.17263 },
                id: 8
            }
        ],
        destination: {
            address: 'Cerdanyola Centre, El Valles',
            point: { _latitude: 41.4914, _longitude: 2.13349 }
        },
        endTime: '2018-12-18T07:50:00.000Z',
        startTime: '2018-12-18T07:00:00.000Z',
        description: 'Barcelona a Cerdanyola',
        driverName: 'Rosalia',
        route: 'sdq{Fc}iLurAy{AyiEabDgfDhqEgyB|gA{x@xv@{x@rsF',
        status: 'ongoing'
    },
    {
        origin: {
            address: 'Girona centre, Girona',
            point: { _latitude: 41.98055, _longitude: 2.8228 }
        },
        stops: [
            {
                point: { _latitude: 42.07967, _longitude: 2.81734 },
                id: 9
            },
            {
                point: { _latitude: 42.10362, _longitude: 2.80567 },
                id: 10
            }
        ],
        destination: {
            address: "Banyoles, Pla de l' estany",
            point: { _latitude: 42.12741, _longitude: 2.76088 }
        },
        endTime: '2018-12-24T16:30:00.000Z',
        startTime: '2018-12-24T16:00:00.000Z',
        description: 'Girona  a Banyoles',
        driverName: 'Fernando Castaño',
        route: 'mif_GoifP}`F?auAst@qdCxmA}lD|GikF`aEfUl}AisAj_A',
        status: 'scheduled'
    },
    {
        destination: {
            point: { _latitude: 41.44003, _longitude: 2.22511 },
            address: 'Badalona centre, Barcelona'
        },
        endTime: '2018-12-19T09:00:00.000Z',
        startTime: '2018-12-19T08:00:00.000Z',
        description: 'Barcelona a Badalona',
        driverName: 'Luciano fernando de la caslada y Maria',
        route: 'sdq{Fc}iLqsCcsByoCgjBelAmT',
        status: 'cancelled',
        origin: {
            address: 'Metropolis:lab, Barcelona',
            point: { _latitude: 41.38074, _longitude: 2.18594 }
        },
        stops: [{}]
    },
    {
        status: 'scheduled',
        origin: {
            address: 'SEAT HQ, Martorell',
            point: { _latitude: 41.49958, _longitude: 1.90307 }
        },
        stops: [{}],
        destination: {
            address: 'Metropolis:lab, Barcelona',
            point: { _latitude: 41.38074, _longitude: 2.18594 }
        },
        endTime: '2018-12-18T16:00:00.000Z',
        startTime: '2018-12-18T15:00:00.000Z',
        description: 'Martorell a Barcelona',
        driverName: 'Concha Piquer',
        route:
            'sdq{Fc}iLj@zR|W~TryCzvC??do@jkKeiDxjIccLhiFqiE`uJqe@rlCy~B`t@sK|i@'
    },
    {
        driverName: 'John Smith',
        route: 'sdq{Fc}iLeoBrgBs@xsGecD|sEswEv|Cek@cyA',
        status: 'finalized',
        origin: {
            point: { _latitude: 41.46693, _longitude: 2.08006 },
            address: 'Sant Cugat Centre, El Valles'
        },
        stops: [{}],
        destination: {
            address: 'Metropolis:lab, Barcelona',
            point: { _latitude: 41.38074, _longitude: 2.18594 }
        },
        endTime: '2018-12-16T10:00:00.000Z',
        startTime: '2018-12-16T09:00:00.000Z',
        description: 'Sant Cugat a Barcelona'
    }
];
