
const store = {
    state: {
        username: ''
    },
    mutation:{
        updateName: function(newName){
            console.log(newName)
            store.state.username = newName
        }
    },
    commit: function(type,payload){
        this.mutation[type](payload)
    },
    dispatch: {
        
    }
}
let MyPlugin = {};
MyPlugin.install = function(Vue,option){
    Vue.prototype.$store = store;
}
export default MyPlugin