const ParticlesTheme = () => {

  const HomeParticle = {
    'fullScreen': {
      'zIndex': -1
    },
    'interactivity': {
      'events': {
        'onClick': {
          'enable': true,
          'mode': 'push'
        },
        'onHover': {
          'enable': false,
          'mode': 'repulse'
        }
      },
      'modes': {
        'attract': {
          'distance': 200,
          'duration': 0.4,
          'easing': 'ease-out-quad',
          'factor': 1,
          'maxSpeed': 50,
          'speed': 1
        },
        'bounce': {
          'distance': 200
        },
        'bubble': {
          'distance': 200,
          'duration': 0.4,
          'mix': false
        },
        'connect': {
          'distance': 80,
          'links': {
            'opacity': 0.5
          },
          'radius': 60
        },
        'grab': {
          'distance': 100,
          'links': {
            'blink': false,
            'consent': false,
            'opacity': 1
          }
        },
        'push': {
          'default': true,
          'groups': [],
          'quantity': 4
        },
        'remove': {
          'quantity': 2
        },
        'trail': {
          'delay': 1,
          'pauseOnStop': false,
          'quantity': 1
        },
        'light': {
          'area': {
            'gradient': {
              'start': {
                'value': '#ffffff'
              },
              'stop': {
                'value': '#ffffff'
              }
            },
            'radius': 1000
          },
          'shadow': {
            'color': {
              'value': '#000000'
            },
            'length': 2000
          }
        }
      }
    },
    'particles': {
      'color': {
        'value': '#1a30ad',
        'animation': {
          'h': {
            'enable': true,
            'speed': 5
          }
        }
      },
      'move': {
        'enable': true,
        'speed': 1
      },
      'number': {
        'density': {
          'enable': true
        },
        'value': 40
      },
      'opacity': {
        'value': 0.6
      },
      'size': {
        'value': {
          'min': 0.1,
          'max': 3
        }
      },
      'life': {
        'count': 0,
        'delay': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 0,
          'sync': false
        },
        'duration': {
          'random': {
            'enable': false,
            'minimumValue': 0.0001
          },
          'value': 0,
          'sync': false
        }
      },
      'roll': {
        'darken': {
          'enable': false,
          'value': 0
        },
        'enable': false,
        'enlighten': {
          'enable': false,
          'value': 0
        },
        'mode': 'vertical',
        'speed': 25
      },
      'tilt': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'decay': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'enable': false
      },
      'twinkle': {
        'lines': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        },
        'particles': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        }
      },
      'wobble': {
        'distance': 5,
        'enable': false,
        'speed': {
          'angle': 50,
          'move': 10
        }
      },
      'orbit': {
        'animation': {
          'count': 0,
          'enable': false,
          'speed': 1,
          'decay': 0,
          'sync': false
        },
        'enable': false,
        'opacity': 1,
        'rotation': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 45
        },
        'width': 1
      },
      'links': {
        'blink': false,
        'color': {
          'value': '#ffffff'
        },
        'consent': false,
        'distance': 100,
        'enable': true,
        'frequency': 1,
        'opacity': 0.4,
        'shadow': {
          'blur': 5,
          'color': {
            'value': '#000'
          },
          'enable': false
        },
        'triangles': {
          'enable': false,
          'frequency': 1
        },
        'width': 1,
        'warp': false
      },
      'repulse': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'enabled': false,
        'distance': 1,
        'duration': 1,
        'factor': 1,
        'speed': 1
      }
    }
  };

  const DestinationParticle = {
    'fullScreen': {
      'zIndex': -1
    },
    'interactivity': {
      'events': {
        'onClick': {
          'enable': false,
          'mode': 'repulse'
        },
        'onHover': {
          'enable': true,
          'mode': 'bubble'
        }
      },
      'modes': {
        'attract': {
          'distance': 200,
          'duration': 0.4,
          'easing': 'ease-out-quad',
          'factor': 1,
          'maxSpeed': 50,
          'speed': 1
        },
        'bounce': {
          'distance': 200
        },
        'bubble': {
          'distance': 250,
          'duration': 2,
          'mix': false,
          'opacity': 0,
          'size': 0,
          'divs': {
            'distance': 220,
            'duration': 0.4,
            'mix': false,
            'selectors': []
          }
        },
        'connect': {
          'distance': 80,
          'links': {
            'opacity': 0.5
          },
          'radius': 60
        },
        'grab': {
          'distance': 400,
          'links': {
            'blink': false,
            'consent': false,
            'opacity': 1
          }
        },
        'push': {
          'default': true,
          'groups': [],
          'quantity': 4
        },
        'remove': {
          'quantity': 2
        },
        'trail': {
          'delay': 1,
          'pauseOnStop': false,
          'quantity': 1
        },
        'light': {
          'area': {
            'gradient': {
              'start': {
                'value': '#ffffff'
              },
              'stop': {
                'value': '#000000'
              }
            },
            'radius': 1000
          },
          'shadow': {
            'color': {
              'value': '#000000'
            },
            'length': 2000
          }
        }
      }
    },
    'particles': {
      'color': {
        'value': '#ffffff'
      },
      'move': {
        'attract': {
          'rotate': {
            'x': 600,
            'y': 600
          }
        },
        'enable': true,
        'random': true,
        'speed': 1
      },
      'number': {
        'density': {
          'enable': true
        },
        'value': 80
      },
      'opacity': {
        'value': {
          'min': 0,
          'max': 1
        },
        'animation': {
          'enable': true,
          'speed': 1,
          'minimumValue': 0
        }
      },
      'size': {
        'value': {
          'min': 1,
          'max': 3
        },
        'animation': {
          'speed': 4,
          'minimumValue': 0.3
        }
      },
      'life': {
        'count': 0,
        'delay': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 0,
          'sync': false
        },
        'duration': {
          'random': {
            'enable': false,
            'minimumValue': 0.0001
          },
          'value': 0,
          'sync': false
        }
      },
      'roll': {
        'darken': {
          'enable': false,
          'value': 0
        },
        'enable': false,
        'enlighten': {
          'enable': false,
          'value': 0
        },
        'mode': 'vertical',
        'speed': 25
      },
      'tilt': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'decay': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'enable': false
      },
      'twinkle': {
        'lines': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        },
        'particles': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        }
      },
      'wobble': {
        'distance': 5,
        'enable': false,
        'speed': {
          'angle': 50,
          'move': 10
        }
      },
      'orbit': {
        'animation': {
          'count': 0,
          'enable': false,
          'speed': 1,
          'decay': 0,
          'sync': false
        },
        'enable': false,
        'opacity': 1,
        'rotation': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 45
        },
        'width': 1
      },
      'links': {
        'blink': false,
        'color': {
          'value': '#ffffff'
        },
        'consent': false,
        'distance': 150,
        'enable': false,
        'frequency': 1,
        'opacity': 0.4,
        'shadow': {
          'blur': 5,
          'color': {
            'value': '#000'
          },
          'enable': false
        },
        'triangles': {
          'enable': false,
          'frequency': 1
        },
        'width': 1,
        'warp': false
      },
      'repulse': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'enabled': false,
        'distance': 1,
        'duration': 1,
        'factor': 1,
        'speed': 1
      }
    }
  };

  const CrewParticle =   {
    'fullScreen': {
      'zIndex': -1
    },
    'interactivity': {
      'events': {
        'onClick': {
          'enable': true,
          'mode': 'push'
        },
        'onDiv': {
          'selectors': '#repulse-div',
          'mode': 'repulse'
        },
        'onHover': {
          'enable': true,
          'mode': 'connect',
          'parallax': {
            'force': 60
          }
        }
      },
      'modes': {
        'attract': {
          'distance': 200,
          'duration': 0.4,
          'easing': 'ease-out-quad',
          'factor': 1,
          'maxSpeed': 50,
          'speed': 1
        },
        'bounce': {
          'distance': 200
        },
        'bubble': {
          'distance': 400,
          'duration': 2,
          'mix': false,
          'opacity': 0.8,
          'size': 40,
          'divs': {
            'distance': 200,
            'duration': 0.4,
            'mix': false,
            'selectors': []
          }
        },
        'connect': {
          'distance': 80,
          'links': {
            'opacity': 0.5
          },
          'radius': 60
        },
        'grab': {
          'distance': 400,
          'links': {
            'blink': false,
            'consent': false,
            'opacity': 1
          }
        },
        'push': {
          'default': true,
          'groups': [],
          'quantity': 4
        },
        'remove': {
          'quantity': 2
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4,
          'factor': 100,
          'speed': 1,
          'maxSpeed': 50,
          'easing': 'ease-out-quad',
          'divs': {
            'distance': 200,
            'duration': 0.4,
            'factor': 100,
            'speed': 1,
            'maxSpeed': 50,
            'easing': 'ease-out-quad',
            'selectors': []
          }
        },
        'trail': {
          'delay': 1,
          'pauseOnStop': false,
          'quantity': 1
        },
        'light': {
          'area': {
            'gradient': {
              'start': {
                'value': '#ffffff'
              },
              'stop': {
                'value': '#ffffff'
              }
            },
            'radius': 1000
          },
          'shadow': {
            'color': {
              'value': '#000000'
            },
            'length': 2000
          }
        }
      }
    },
    'particles': {
      'color': {
        'value': '#ffffff'
      },
      'move': {
        'attract': {
          'rotate': {
            'x': 600,
            'y': 1200
          }
        },
        'enable': true,
        'speed': 1
      },
      'number': {
        'density': {
          'enable': true
        },
        'limit': 500,
        'value': 40
      },
      'opacity': {
        'value': 0.1,
        'animation': {
          'speed': 1,
          'minimumValue': 0.1
        }
      },
      'size': {
        'value': {
          'min': 1,
          'max': 5
        },
        'animation': {
          'speed': 40,
          'minimumValue': 0.1
        }
      },
      'life': {
        'count': 0,
        'delay': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 0,
          'sync': false
        },
        'duration': {
          'random': {
            'enable': false,
            'minimumValue': 0.0001
          },
          'value': 0,
          'sync': false
        }
      },
      'roll': {
        'darken': {
          'enable': false,
          'value': 0
        },
        'enable': false,
        'enlighten': {
          'enable': false,
          'value': 0
        },
        'mode': 'vertical',
        'speed': 25
      },
      'tilt': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'decay': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'enable': false
      },
      'twinkle': {
        'lines': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        },
        'particles': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        }
      },
      'wobble': {
        'distance': 5,
        'enable': false,
        'speed': {
          'angle': 50,
          'move': 10
        }
      },
      'orbit': {
        'animation': {
          'count': 0,
          'enable': false,
          'speed': 1,
          'decay': 0,
          'sync': false
        },
        'enable': false,
        'opacity': 1,
        'rotation': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 45
        },
        'width': 1
      },
      'links': {
        'blink': false,
        'color': {
          'value': '#ffffff'
        },
        'consent': false,
        'distance': 150,
        'enable': false,
        'frequency': 1,
        'opacity': 0.4,
        'shadow': {
          'blur': 5,
          'color': {
            'value': '#ffffff'
          },
          'enable': false
        },
        'triangles': {
          'enable': false,
          'frequency': 1
        },
        'width': 1,
        'warp': false
      },
      'repulse': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'enabled': false,
        'distance': 1,
        'duration': 1,
        'factor': 1,
        'speed': 1
      }
    }
  };
  const TechnologyParticle = {
    'fullScreen': {
      'zIndex': -1
    },
    'interactivity': {
      'events': {
        'onClick': {
          'enable': true,
          'mode': 'absorber'
        },
        'onHover': {
          'enable': true,
          'mode': 'repulse'
        }
      },
      'modes': {
        'attract': {
          'distance': 200,
          'duration': 0.4,
          'easing': 'ease-out-quad',
          'factor': 1,
          'maxSpeed': 50,
          'speed': 1
        },
        'bounce': {
          'distance': 200
        },
        'bubble': {
          'distance': 400,
          'duration': 2,
          'mix': false,
          'opacity': 0.8,
          'size': 40,
          'divs': {
            'distance': 200,
            'duration': 0.4,
            'mix': false,
            'selectors': []
          }
        },
        'connect': {
          'distance': 80,
          'links': {
            'opacity': 0.5
          },
          'radius': 60
        },
        'grab': {
          'distance': 400,
          'links': {
            'blink': false,
            'consent': false,
            'opacity': 1
          }
        },
        'push': {
          'default': true,
          'groups': [],
          'quantity': 4
        },
        'remove': {
          'quantity': 2
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4,
          'factor': 100,
          'speed': 1,
          'maxSpeed': 50,
          'easing': 'ease-out-quad',
          'divs': {
            'distance': 200,
            'duration': 0.4,
            'factor': 100,
            'speed': 1,
            'maxSpeed': 50,
            'easing': 'ease-out-quad',
            'selectors': []
          }
        },
        'trail': {
          'delay': 1,
          'pauseOnStop': false,
          'quantity': 1
        },
        'light': {
          'area': {
            'gradient': {
              'start': {
                'value': '#ffffff'
              },
              'stop': {
                'value': '#000000'
              }
            },
            'radius': 1000
          },
          'shadow': {
            'color': {
              'value': '#000000'
            },
            'length': 2000
          }
        },
        'absorbers': {
          'color': {
            'value': '#ff0000'
          },
          'draggable': false,
          'opacity': 1,
          'destroy': true,
          'orbits': false,
          'size': {
            'random': {
              'enable': true,
              'minimumValue': 5
            },
            'value': {
              'min': 5,
              'max': 10
            },
            'density': 5,
            'limit': {
              'radius': 50,
              'mass': 0
            }
          }
        }
      }
    },
    'particles': {
      'color': {
        'value': '#ffffff'
      },
      'move': {
        'attract': {
          'rotate': {
            'x': 600,
            'y': 1200
          }
        },
        'enable': true,
      },
      'number': {
        'value': 60
      },
      'opacity': {
        'value': {
          'min': 0.1,
          'max': 0.5
        },
        'animation': {
          'enable': true,
          'speed': 3,
          'minimumValue': 0.1
        }
      },
      'size': {
        'value': {
          'min': 1,
          'max': 10
        },
        'animation': {
          'speed': 10,
          'minimumValue': 0.1
        }
      },
      'life': {
        'count': 0,
        'delay': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 0,
          'sync': false
        },
        'duration': {
          'random': {
            'enable': false,
            'minimumValue': 0.0001
          },
          'value': 0,
          'sync': false
        }
      },
      'roll': {
        'darken': {
          'enable': false,
          'value': 0
        },
        'enable': false,
        'enlighten': {
          'enable': false,
          'value': 0
        },
        'mode': 'vertical',
        'speed': 25
      },
      'tilt': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'decay': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'enable': false
      },
      'twinkle': {
        'lines': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        },
        'particles': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        }
      },
      'wobble': {
        'distance': 5,
        'enable': false,
        'speed': {
          'angle': 50,
          'move': 10
        }
      },
      'orbit': {
        'animation': {
          'count': 0,
          'enable': false,
          'speed': 1,
          'decay': 0,
          'sync': false
        },
        'enable': false,
        'opacity': 1,
        'rotation': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 5
        },
        'width': 1
      },
      'links': {
        'blink': false,
        'color': {
          'value': '#e6e6e7'
        },
        'consent': false,
        'distance': 150,
        'enable': true,
        'frequency': 1,
        'opacity': 0.4,
        'shadow': {
          'blur': 5,
          'color': {
            'value': '#8d6e35'
          },
          'enable': false
        },
        'triangles': {
          'enable': false,
          'frequency': 1
        },
        'width': 1,
        'warp': false
      },
      'repulse': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'enabled': false,
        'distance': 1,
        'duration': 1,
        'factor': 1,
        'speed': 1
      }
    },
    'absorbers': {
      'color': {
        'value': '#1a30ad'
      },
      'draggable': false,
      'opacity': 1,
      'destroy': true,
      'orbits': false,
      'size': {
        'random': {
          'enable': true,
          'minimumValue': 5
        },
        'value': {
          'min': 5,
          'max': 10
        },
        'density': 5,
        'limit': {
          'radius': 60,
          'mass': 0
        }
      },
      'position': {
        'x': 40,
        'y': 10
      }
    }
  };

  return {
    HomeParticle,
    DestinationParticle,
    CrewParticle,
    TechnologyParticle
  };

};

export default ParticlesTheme ;