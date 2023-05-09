import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from "./actions/types";


const initialState = {

    data:[],
    myFavorite: [],
    allCharacters: []


}

export default function rootReducer(state=initialState, {type,payload}){
    switch(type){

        case ADD_FAV:
            return{
                ...state,
                myFavorite: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]


            };

        case REMOVE_FAV:

        const newFavorite = state.allCharacters.filter((ch) => ch.id !== payload)


            return{
                ...state,
                myFavorite: newFavorite,
                allCharacters:  newFavorite

            };

        case FILTER:

        const newFilter = state.allCharacters.filter((ch) => ch.gender === payload)


            return{
                ...state,
                myFavorite: newFilter

            };
            case RESET:
    
            return{
                ...state,
                myFavorite: [...state.allCharacters]

            };


            case ORDER:

            const newOrder = state.allCharacters.sort((a,b)=>{
                if(a.id>b.id){
                    return "Ascendente" === payload ? 1 : -1
                }
                if(a.id > b.id){
                    return "Descendente" === payload ? 1 : -1
                }
                return 0;


            })

           
    
                return{
                    ...state,
                    myFavorite: newOrder
    
                };
        default:
            return state
    }



    
}