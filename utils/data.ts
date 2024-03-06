import rise from "@/public/rise1.svg";
import news from "@/public/news.svg";
import Person1 from "@/public/person1.jpg";
import Person2 from "@/public/Person2.webp";
import Person3 from "@/public/person3.jpg";
import { EventType, PersonType } from "@/utils/types";

export const dounutChartData = {
    labels: ['Foundation', 'Crowdsale investors' ],
    datasets: [
      {
        label: 'Label',
        data: [20,80],
        backgroundColor: [
          'rgba(251, 138, 26, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };


  export const events: EventType[] = [
    {
      icon: news,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus.",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus sit amet urna ac, ornare tristique risus. Integer rhoncus metus a dui sagittis, vel gravida ipsum efficitur. Nullam viverra turpis vel lacus hendrerit ultrices. Sed vel magna vel turpis varius gravida. Donec pellentesque lorem non odio pellentesque, at volutpat dolor tristique. Morbi non odio magna. In hac habitasse platea dictumst. In aliquet non neque in tristique. Aliquam ultricies neque blandit velit sodales aliquam. Mauris malesuada ligula quis nisi porta, a fermentum est pellentesque. Nulla aliquet vulputate efficitur. Aliquam euismod sodales laoreet. Cras non odio mauris. Etiam blandit molestie urna. Donec at luctus neque, ac pharetra ipsum. Vivamus fermentum arcu quis eros euismod dictum. Quisque accumsan massa vitae lorem egestas, id feugiat ipsum commodo. Praesent ullamcorper tortor vel suscipit vestibulum. Nunc tristique dictum scelerisque. Nullam venenatis purus est, sit amet pharetra sapien pulvinar hendrerit. Suspendisse luctus id lorem sit amet scelerisque. Integer ut vestibulum lectus. Vivamus tristique nibh arcu, sed consectetur urna consequat at.",
    },
    {
      icon: rise,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus.",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus sit amet urna ac, ornare tristique risus. Integer rhoncus metus a dui sagittis, vel gravida ipsum efficitur. Nullam viverra turpis vel lacus hendrerit ultrices. Sed vel magna vel turpis varius gravida. Donec pellentesque lorem non odio pellentesque, at volutpat dolor tristique. Morbi non odio magna. In hac habitasse platea dictumst. In aliquet non neque in tristique. Aliquam ultricies neque blandit velit sodales aliquam. Mauris malesuada ligula quis nisi porta, a fermentum est pellentesque. Nulla aliquet vulputate efficitur. Aliquam euismod sodales laoreet. Cras non odio mauris. Etiam blandit molestie urna. Donec at luctus neque, ac pharetra ipsum. Vivamus fermentum arcu quis eros euismod dictum. Quisque accumsan massa vitae lorem egestas, id feugiat ipsum commodo. Praesent ullamcorper tortor vel suscipit vestibulum. Nunc tristique dictum scelerisque. Nullam venenatis purus est, sit amet pharetra sapien pulvinar hendrerit. Suspendisse luctus id lorem sit amet scelerisque. Integer ut vestibulum lectus. Vivamus tristique nibh arcu, sed consectetur urna consequat at.",
    }, {
      icon: news,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus.",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus sit amet urna ac, ornare tristique risus. Integer rhoncus metus a dui sagittis, vel gravida ipsum efficitur. Nullam viverra turpis vel lacus hendrerit ultrices. Sed vel magna vel turpis varius gravida. Donec pellentesque lorem non odio pellentesque, at volutpat dolor tristique. Morbi non odio magna. In hac habitasse platea dictumst. In aliquet non neque in tristique. Aliquam ultricies neque blandit velit sodales aliquam. Mauris malesuada ligula quis nisi porta, a fermentum est pellentesque. Nulla aliquet vulputate efficitur. Aliquam euismod sodales laoreet. Cras non odio mauris. Etiam blandit molestie urna. Donec at luctus neque, ac pharetra ipsum. Vivamus fermentum arcu quis eros euismod dictum. Quisque accumsan massa vitae lorem egestas, id feugiat ipsum commodo. Praesent ullamcorper tortor vel suscipit vestibulum. Nunc tristique dictum scelerisque. Nullam venenatis purus est, sit amet pharetra sapien pulvinar hendrerit. Suspendisse luctus id lorem sit amet scelerisque. Integer ut vestibulum lectus. Vivamus tristique nibh arcu, sed consectetur urna consequat at.",
    },
    {
      icon: rise,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus.",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus sit amet urna ac, ornare tristique risus. Integer rhoncus metus a dui sagittis, vel gravida ipsum efficitur. Nullam viverra turpis vel lacus hendrerit ultrices. Sed vel magna vel turpis varius gravida. Donec pellentesque lorem non odio pellentesque, at volutpat dolor tristique. Morbi non odio magna. In hac habitasse platea dictumst. In aliquet non neque in tristique. Aliquam ultricies neque blandit velit sodales aliquam. Mauris malesuada ligula quis nisi porta, a fermentum est pellentesque. Nulla aliquet vulputate efficitur. Aliquam euismod sodales laoreet. Cras non odio mauris. Etiam blandit molestie urna. Donec at luctus neque, ac pharetra ipsum. Vivamus fermentum arcu quis eros euismod dictum. Quisque accumsan massa vitae lorem egestas, id feugiat ipsum commodo. Praesent ullamcorper tortor vel suscipit vestibulum. Nunc tristique dictum scelerisque. Nullam venenatis purus est, sit amet pharetra sapien pulvinar hendrerit. Suspendisse luctus id lorem sit amet scelerisque. Integer ut vestibulum lectus. Vivamus tristique nibh arcu, sed consectetur urna consequat at.",
    }, {
      icon: news,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus.",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus sit amet urna ac, ornare tristique risus. Integer rhoncus metus a dui sagittis, vel gravida ipsum efficitur. Nullam viverra turpis vel lacus hendrerit ultrices. Sed vel magna vel turpis varius gravida. Donec pellentesque lorem non odio pellentesque, at volutpat dolor tristique. Morbi non odio magna. In hac habitasse platea dictumst. In aliquet non neque in tristique. Aliquam ultricies neque blandit velit sodales aliquam. Mauris malesuada ligula quis nisi porta, a fermentum est pellentesque. Nulla aliquet vulputate efficitur. Aliquam euismod sodales laoreet. Cras non odio mauris. Etiam blandit molestie urna. Donec at luctus neque, ac pharetra ipsum. Vivamus fermentum arcu quis eros euismod dictum. Quisque accumsan massa vitae lorem egestas, id feugiat ipsum commodo. Praesent ullamcorper tortor vel suscipit vestibulum. Nunc tristique dictum scelerisque. Nullam venenatis purus est, sit amet pharetra sapien pulvinar hendrerit. Suspendisse luctus id lorem sit amet scelerisque. Integer ut vestibulum lectus. Vivamus tristique nibh arcu, sed consectetur urna consequat at.",
    },
    {
      icon: rise,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus.",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi eros, luctus sit amet urna ac, ornare tristique risus. Integer rhoncus metus a dui sagittis, vel gravida ipsum efficitur. Nullam viverra turpis vel lacus hendrerit ultrices. Sed vel magna vel turpis varius gravida. Donec pellentesque lorem non odio pellentesque, at volutpat dolor tristique. Morbi non odio magna. In hac habitasse platea dictumst. In aliquet non neque in tristique. Aliquam ultricies neque blandit velit sodales aliquam. Mauris malesuada ligula quis nisi porta, a fermentum est pellentesque. Nulla aliquet vulputate efficitur. Aliquam euismod sodales laoreet. Cras non odio mauris. Etiam blandit molestie urna. Donec at luctus neque, ac pharetra ipsum. Vivamus fermentum arcu quis eros euismod dictum. Quisque accumsan massa vitae lorem egestas, id feugiat ipsum commodo. Praesent ullamcorper tortor vel suscipit vestibulum. Nunc tristique dictum scelerisque. Nullam venenatis purus est, sit amet pharetra sapien pulvinar hendrerit. Suspendisse luctus id lorem sit amet scelerisque. Integer ut vestibulum lectus. Vivamus tristique nibh arcu, sed consectetur urna consequat at.",
    },];


export const peopleData: PersonType[] = [
  {
    name: "John Smith",
    position: "CEO",
    image: Person1,
    feedback: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },{
    name: "Elina Williams",
    position: "CTO",
    image: Person2,
    feedback: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },{
    name: "John Smith",
    position: "CTO",
    image: Person3,
    feedback: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
]
