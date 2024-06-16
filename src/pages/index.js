import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head';
import { Box, Button, Grid } from '@mui/material';
import { quizData, shuffle } from "../static"
import Image from 'next/image';
import ProgressBar from '@/component/progressbar';
import ListScore from '@/component/listScore';

export default function Home() {
  const [page, setPage] = useState(0)
  const [data, setData] = useState(null);
  const dispatch = useDispatch()
  const [color, setColor] = useState({ first: "", second: "" })
  const [score, setScore] = useState(0)
  const [ans, setAns] = useState("");
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(15);



  useEffect(() => {
    let newData = shuffle(quizData[page].images)
    setData({ ...quizData[page], images: newData })
  }, [page])

  React.useEffect(() => {
    let interval = null;

    if (isActive ) {
      interval = setInterval(() => {

        setCounter(time)
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const setCounter = () => {
    if (time > 0 && isActive) {
      setTime((time) => time - 1);
    } else {
      setIsActive(false),

      setActive(true)
    }
  }


  const onClickImageHandler = (val) => {

    if (data.images[val].length > 11) {
      setAns("You choosen correct answer.")
      setScore((score) => score + 1)
      if (val == 0) {
        setColor({ first: "#00892d", second: "#ad00b3" })
      }
      if (val == 1) {
        setColor({ first: "#ad00b3", second: "#00892d" })
      }
    }
    if (data.images[val].length < 12) {
      setAns("You have chossen wrong answer.")
      if (val == 0) {
        setColor({ first: "#ad00b3", second: "#00892d" })

      }
      if (val == 1) {
        setColor({ first: "#00892d", second: "#ad00b3" })
      }
    }
    if (page < 9) {
      setActive(true)
    }



  }

  const onNextHandler = () => {
    if (active) {
      if (page < 9) {
        setPage(page => page + 1)
      }
      setAns("")
      setActive(false)
      setColor({ first: "", second: "" })
      setIsActive(true);
      setTime(15)
    } else if (page == 9) {
      let sdata = sessionStorage.getItem("score") ? JSON.parse(sessionStorage.getItem("score")) : []
      var currentTime = new Date()
      sessionStorage.setItem("score", JSON.stringify([...sdata, {score:score,time:currentTime}]));
      setAns("")
      setActive(true)
      setIsActive(false);
    } else {
      setAns("Please Choose any Image");
    }

  }

  const onRefreshHandler = () => {
    setActive(false)
    setPage(0)
    setAns("")
    setColor({ first: "", second: "" })
    setScore(0)
    setIsActive(true);
      setTime(15)
  }

  return (
    <main >
      <Head>
        <title>Quiz </title>
      </Head>
      <Box sx={{ margin: 1, fontWeight: "bold", textAlign: "center", fontSize: 28, color: "#1976d2" }}>Quiz: {page + 1} / 10</Box>
      <Box sx={{ margin: 1, fontWeight: "bold", textAlign: "center", fontSize: 28, color: "#1976d2" }}>Score: {score}</Box>

      {page == 9 && active ? (null) : (<Box sx={{ height: 20, margin: 1, marginBottom: 5, fontWeight: "bold", textAlign: "center", fontSize: 28, color: ans.length > 28 ? "red" : "green" }}>{ans}</Box>)}




      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={10} sx={{ width: "60%" , color:"red"}}>Time Left : {time}</Grid>
        <Grid item>
          {page == 9 && active ? (<Box><h3>Your scored : {score} out of 10</h3></Box>) : (<Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={6} >
            <Grid item xs={12} sm={12} lg={6} xl={6}>
              <Button disabled={active} onClick={() => onClickImageHandler(0)} sx={{ borderRadius: 6, border: "1px solid blue", backgroundColor: `${color.first}`, padding: 3 }}>
                <Image src={`/images/${data?.images[0]}`} alt="images" width={500} height={300} />
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} xl={6}>
              <Button disabled={active} onClick={() => onClickImageHandler(1)} sx={{ borderRadius: 6, border: "1px solid blue", backgroundColor: `${color.second}`, padding: 3 }}>
                <Image src={`/images/${data?.images[1]}`} alt="images" width={500} height={300} />
              </Button>
            </Grid>
          </Grid>)}

        </Grid>
        <Grid item>{page == 9 && active ? (<Button variant="contained" onClick={onRefreshHandler}>Refresh</Button>) : (<Button variant="contained" onClick={onNextHandler}>Next</Button>)}</Grid>
        <Grid item xs={12}>{page == 9 && active ? <ListScore /> : null}</Grid>
      </Grid>

    </main>
  )
}






