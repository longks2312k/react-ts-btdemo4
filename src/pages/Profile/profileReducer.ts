const initialState = {
    token: []
};

interface Picture {
    source: string
    name: string
}

export default function authReducer(state = initialState, action: { type: any; data: Picture; }) {
    switch (action.type) {
        case "ADD_PICTURE":
            return {
                token: [...state.token, action.data]
            };
        default:
        return state;
    }
}