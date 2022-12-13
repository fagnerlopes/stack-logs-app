import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {    
    themes: {      
      light: {
        primary: '#2589BD',
        secondary: '#22A9D3',        
        error: '#FF0A0A',
        success: '#AAE935'
      },
      dark: {
        primary: '#2589BD',
        secondary: '#22A9D3',        
        error: '#FF0A0A',
        success: '#AAE935'
      },
    },
  },

});
