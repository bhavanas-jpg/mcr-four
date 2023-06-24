
import {forumData} from "../data/forumData"
const DataReducer = () => {
    const initialState = {
       sortBy : "Latest Posts",
       forumPosts: forumData.posts
    }

    const dataReducer = (state, action) => {
        switch (action.type) {
       case "FILTER__TYPE" : 
       return{
        ...state,
        sortBy: action.payload
       }
       case "UPVOTE":
        return{
        ...state,
        forumPosts: state.forumPosts.
        filter(post =>post.username === action.payload).
        map(post =>
            ({...post, upvotes: post.upvotes + 1})
            )
        }
        case "BOOKMARK":
        return{
            ...state,
            
        }
            default:
                return null;
        }
    }
    return { initialState, dataReducer }
}

export default DataReducer;

