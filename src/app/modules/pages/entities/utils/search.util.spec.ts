import {EntityCardModel} from '../../../../core/components/entity-card/models/entity-card.model';
import {EntitySearchUtil} from './search.util';

describe('EntitySearchUtils', () => {
  describe('fuzzySearch', () => {
    it('should return for name', () => {
      const searchTerm = 'ity';
      const expected = 5;

      const out = EntitySearchUtil.fuzzySearch(TestMockData.MOCK_ENTITIES, searchTerm);

      expect(out.length).toEqual(expected);
    });

    it('should return for email', () => {
      const searchTerm = '1@';
      const expected = 1;

      const out = EntitySearchUtil.fuzzySearch(TestMockData.MOCK_ENTITIES, searchTerm);

      expect(out.length).toEqual(expected);
    });

    it('should return for place', () => {
      const searchTerm = 'Foo';
      const expected = 1;

      const out = EntitySearchUtil.fuzzySearch(TestMockData.MOCK_ENTITIES, searchTerm);

      expect(out.length).toEqual(expected);
    });

    it('should return for place alternative case', () => {
      const searchTerm = 'foo';
      const expected = 1;

      const out = EntitySearchUtil.fuzzySearch(TestMockData.MOCK_ENTITIES, searchTerm);

      expect(out.length).toEqual(expected);
    });

    it('should return for risk flag', () => {
      const searchTerm = 'medium risk';
      const expected = 1;

      const out = EntitySearchUtil.fuzzySearch(TestMockData.MOCK_ENTITIES, searchTerm);

      expect(out.length).toEqual(expected);
    });
  });
});

class TestMockData {
  static MOCK_ENTITIES: Array<EntityCardModel> = [
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
    }
  ];
}
