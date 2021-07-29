import React from "react"
import { getEvents } from "../actions/index"
import { connect } from "react-redux"
import { axiosWithAuth } from "../helper/axiosWithAuth"
import Button from "@material-ui/core/Button"

const Food = (props) =>{
    const {food} = props;
    
    const handleClick = ()=>{
        if(!food.username){
            axiosWithAuth().put(`PLACEHOLDER`)
            .then(res=>{
                props.dispatch(getEvents());
            })
        }
    }

    return(
        <div>
            <h4>{food.food_name}</h4>
            <Button onClick={handleClick}
                color='secondary'
                fullWidth
                variant='contained'
                >{food.username?food.username:"I can bring this!"}
            </Button>
        </div>
    )
}

export default connect()(Food);