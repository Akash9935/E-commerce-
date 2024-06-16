import { useEffect, useState } from "react"

const { Grid, Box, Paper } = require("@mui/material")


const ListScore = () => {
    const [list, setList] = useState()
    useEffect(() => {
        let sdata = sessionStorage.getItem("score") ? sessionStorage.getItem("score") : "[]"
        let parseData = JSON.parse(sdata)
        if(parseData.length >10){
            parseData.shift()
            
            sessionStorage.setItem("score", JSON.stringify(parseData));
        }
        parseData.sort(function(a,b){return a.score-b.score}).reverse()
        setList(parseData)
    }, [])
    return <Paper sx={{ width: 490, padding: 6, backgroundColor:"#d5e7f0" }}>
        <Paper sx={{backgroundColor:"#010183", color:"white"}}><Grid container direction="row" justifyContent="space-between" alignContent="center" >
            <Grid item xs={3}>Rank</Grid>
            <Grid item xs={3}>Score</Grid>
            <Grid item xs={6}>Date/Time</Grid>
        </Grid></Paper>
        {list?.map((el, i) => {
            return (<Paper key={i} sx={{backgroundColor:"#9b9bd5"}}><Grid container direction="row" justifyContent="space-between" alignContent="center" sx={{ margin: 1 }}>
                <Grid item xs={3}>{i + 1}</Grid>
                <Grid item xs={3}>{el.score}</Grid>
                <Grid item xs={6}>{el.time.slice(0,19)}</Grid>
            </Grid></Paper>)
        })}


    </Paper>
}

export default ListScore