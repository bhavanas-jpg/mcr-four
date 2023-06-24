
const DataReducer = () => {
    const initialState = {
        user_name: "Pavan"
    }

    const dataReducer = (state, action) => {
        switch (action.payload) {

            default:
                return null;
        }
    }
    return { initialState, dataReducer }
}

export default DataReducer;

