"use client"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Bgparticles() {
    const particlesInit = useCallback(async (engine: Engine) => {
  
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      return
    }, []);
  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0
                  },
                  fpsLimit: 60,
                  particles: {
                    number: {
                      value: 80,
                      density: {
                        enable: true,
                        value_area: 950
                      }
                    },
                    color: {
                      value: "#160040",
                      animation: {
                        enable: true,
                        speed: 10,
                        sync: true
                      }
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "#160040"
                      },
                      polygon: {
                        nb_sides: 5
                      },
                      
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                      anim: {
                        enable: false,
                        speed: 3,
                        opacity_min: 0.1,
                        sync: false
                      }
                    },
                    size: {
                      value: 3,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 15,
                        size_min: 0.1,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 100,
                      color: "random",
                      opacity: 0.4,
                      width: 1,
                      triangles: {
                        enable: true,
                        color: "#160040",
                        opacity: 0.1
                      }
                    },
                    move: {
                      enable: true,
                      speed: 3,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      attract: {
                        enable: false,
                        rotateX: 1000,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                  retina_detect: true,
                 
            }}
        />
  )
}