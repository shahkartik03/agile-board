import actions from "./actionType";

const sectionIdMap = new Map();
sectionIdMap.set('1', 'whatWentWell');
sectionIdMap.set('2', 'whatCanBeImproved');
sectionIdMap.set('3', 'startDoing');
sectionIdMap.set('4', 'actionItems');

export const initState = {
    [sectionIdMap.get('1')]: {
      id: '1',
      name: 'what Went Well',
      items: [],
      hidden: false,
  },
    [sectionIdMap.get('2')]: {
      id: '2',
      name: 'what Can Be Improved',
      items: [],
      hidden: false,
  },
    [sectionIdMap.get('3')]: {
      id: '3',
      name: 'Start Doing',
      items: [],
      hidden: false,
  },
    [sectionIdMap.get('4')]: {
      id: '4',
      name: 'Action Items',
      items: [],
      hidden: false,
  },
};

export function reducer(state = initState, action) {
    const section = action.payload && sectionIdMap.get(action.payload.sectionId);
  switch (action.type) {
      case actions.ADD_ITEM:
          return {
              ...state,
              [section]: {
                  ...state[section],
                  items: state[section].items.concat({id: action.payload.itemId, label: action.payload.label })
              }
          }
      case actions.REMOVE_ITEM:
          return {
              ...state,
              [section]: {
                  ...state[section],
                  items: state[section].items.
                          slice(0,action.payload.index).
                          concat(
                              state[section].items.
                              slice(action.payload.index+1, state[section].items.length)
                          )
              }
          }
      case actions.UPDATE_ITEM:
          state[section].items.map(item => {
              if(item.id === action.payload.itemId) {
                  item.label = action.payload.newValue
              }
          })
          return {
              ...state
          }
      case actions.SHOW_SECTION:
          state[section].hidden = false;
          return {
              ...state
          }
      case actions.HIDE_SECTION:
          state[section].hidden = true;
          return {
              ...state
          }
        default:
      return state;
  }
}
