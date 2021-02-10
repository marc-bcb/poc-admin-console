import {EntityCardModel} from '../../../../../core/components/entity-card/models/entity-card.model';

export const MOCK_ENTITIES: Array<EntityCardModel> = [
  {
    cNumber: 'C0000000001',
    name: 'Entity 1',
    details: [
      {type: 'email', value: '1@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0001',
    flags: [
      {value: 'Onboarding', type: 'Onboarding', status: 'in-progress'},
      {value: 'Can trade', type: 'trade', status: 'success'},
      {value: 'High risk', type: 'risk', status: 'danger'},
      {value: 'Onfido > unknown', type: 'completion', status: 'unknown'},
      {value: 'Completed: 01 Jan 2021', type: 'completion'}
    ]
  }, {
    cNumber: 'C0000000002',
    name: 'Entity 2',
    details: [
      {type: 'email', value: '2@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Foo'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0002',
    flags: [
      {value: 'Onboarding', type: 'Onboarding', status: 'in-progress'},
      {value: 'Completed: 01 Jan 2021', type: 'completion'}
    ]
  }, {
    cNumber: 'C0000000003',
    name: 'Entity 3',
    details: [
      {type: 'email', value: '3@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0003',
    flags: [
      {value: 'Onboarding', type: 'Onboarding', status: 'in-progress'},
      {value: 'Can trade', type: 'trade'},
      {value: 'Medium risk', type: 'risk', status: 'warn'},
      {value: 'Completed: 01 Jan 2021', type: 'completion'}
    ]
  }, {
    cNumber: 'C0000000004',
    name: 'Entity 4',
    details: [
      {type: 'email', value: '4@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0004',
    flags: [
      {value: 'Onboarding', type: 'Onboarding', status: 'in-progress'},
      {value: 'Can trade', type: 'trade', status: 'success'},
      {value: 'Completed: 01 Jan 2021', type: 'completion'}
    ]
  }, {
    cNumber: 'C0000000005',
    name: 'Entity 5',
    details: [
      {type: 'email', value: '5@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0005',
    flags: [
      {value: 'Onboarding', type: 'Onboarding', status: 'in-progress'},
      {value: 'High risk', type: 'risk', status: 'danger'},
      {value: 'Completed: 01 Jan 2021', type: 'completion'}
    ]
  }, {
    cNumber: 'C0000000006',
    name: 'Entity 6',
    details: [
      {type: 'email', value: '6@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0006',
    flags: [
      {value: 'Onboarding', type: 'Onboarding', status: 'in-progress'},
      {value: 'Can trade', type: 'trade'},
      {value: 'Low risk', type: 'risk', status: 'success'},
      {value: 'Completed: 01 Jan 2021', type: 'completion'}
    ]
  }, {
    cNumber: 'C0000000007',
    name: 'Entity 7',
    details: [
      {type: 'email', value: '7@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0007'
  }, {
    cNumber: 'C0000000008',
    name: 'Entity 8',
    details: [
      {type: 'email', value: '8@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0008'
  }, {
    cNumber: 'C0000000009',
    name: 'Entity 9',
    details: [
      {type: 'email', value: '9@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0009'
  }, {
    cNumber: 'C0000000010',
    name: 'Entity 10',
    details: [
      {type: 'email', value: '10@test.com'},
      {type: 'phone', value: '07400123456'},
      {type: 'place', value: 'Somewhere'},
      {type: 'group', value: 'BCB Prime'}
    ],
    profileId: '0000-0000-0000-0010'
  }
];
