import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Button } from "@mui/material";

export default function Profile() {
  const el2 = useRef(null);

  useEffect(() => {
    const helloType = new Typed(el2.current, {
      strings: [
        "Hello",
        "Hellooooo",
        "Hi",
        "Hi Hi",
        "Hello there",
        "Halo",
        "Sawasdee",
        "Sawasdee kub",
      ],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      shuffle: true,
    });

    // Destropying
    return () => {
      helloType.destroy();
    };
  }, []);
  return (
    // border-2 border-indigo-600
    <div className="flex items-center justify-center h-screen mx-3">
      <Container maxWidth="md" className="rounded-md bg-slate-200 p-10">
        <div className="flex sm:flex-row flex-col">
          <div className="basis-2/5">
            <img
              className="max-w-full rounded-full pr-5"
              alt="Poomsak"
              src={require("../images/me.jpg")}
            ></img>
          </div>
          <div className="basis-3/5">
            <h1 className="text-4xl mt-3">
              <span ref={el2}></span>
            </h1>
            <h2 className="text-3xl my-3">I'm Poomsak Kaewsee</h2>
            <p>- I'm studying Computer Engineering at KMITL</p>
            <p>- You can see all of my projects in my Github bio</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pt-12 lg:pt-28 gap-4 px-10 pt-8">
              <Button
                style={{ backgroundColor: "#1e293b" }}
                variant="contained"
                startIcon={<GitHubIcon />}
                target="_blank"
                href="https://github.com/poomsakk"
              >
                GitHub
              </Button>
              <Button
                style={{ backgroundColor: "#1e293b" }}
                variant="contained"
                startIcon={<LinkedInIcon />}
                target="_blank"
                href="https://linkedin.com/in/poomsak"
              >
                LinkedIn
              </Button>
              <Button
                style={{ backgroundColor: "#1e293b" }}
                variant="contained"
                startIcon={<PictureAsPdfIcon />}
                target="_blank"
                href="https://drive.google.com/file/d/1_hSU_vZuEM800B9Rxp1Brpk21xKelqiZ/view?usp=sharing"
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
        {/* <Grid container spacing={1} >
                    <Grid item xs={4} className="border-2 border-t-orange-700 flex flex-row">
                        <img className='max-w-full rounded-full' alt="Poomsak" src={require("../images/me.jpg")} ></img>
                    </Grid>
                    <Grid item xs={8} className="border-2 border-r-emerald-900">
                        <h1 className='text-4xl'>Hello</h1>
                        <h2 className='text-2xl'>I'm Poomsak Kaewsee</h2>
                    </Grid>
                </Grid> */}
      </Container>
    </div>
  );
}
