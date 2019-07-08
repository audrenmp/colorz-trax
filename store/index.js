import datas from "~/assets/json/datas.json";

export const state = () => ({
  program_list: [],
  calendar_list: []
});

export const mutations = {
  SET_PROGRAM_LIST(state, program) {
    state.program_list = program;
  },
  SET_CALENDAR_LIST(state, calendar) {
    state.calendar_list = calendar;
  }
};

export const getters = {
    GET_CALENDAR_ITEM: (state) => (id) => {
      return state.calendar_list.find(calendar => calendar.id === id)
    },
    GET_PROGRAM_ITEM: (state) => (id) => {
      return state.program_list.find(program => program.id === id)
    },
};

export const actions = {
  nuxtServerInit(vuex_context, nuxt_context) {
    return Promise.all([datas])
      .then(([datas]) => {
        if (datas) {
          vuex_context.commit("SET_PROGRAM_LIST", datas['program']);
          vuex_context.commit("SET_CALENDAR_LIST", datas['calendar']);
        } else {
          nuxt_context.error({ message: "error" });
        }
      })
      .catch(console.error);
  }
};
