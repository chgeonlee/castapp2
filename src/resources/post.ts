import { DeviceEventEmitter } from "react-native";
import { getTemplateDataById } from "./user";

export interface PostDataProps {
  dbid: string | null;
  user: { dbid: string; id: string; thumb: string | null };
  content: {
    upload_at: string;
    text: string | null;
    media: {
      url: string;
      type: string;
      size?: { width: number; height: number };
    }[];
  };
  statistics: {
    like: number;
    comments: number;
  };
  location: {
    name: string;
    isPublic: boolean;
  };
  detail: any;
}

export default class PostResource {
  private static _instance: PostResource;

  public static get instance() {
    return this._instance || (this._instance = new PostResource());
  }

  private constructor() {}

  public data: PostDataProps[] | null = null;

  loaded() {
    return this.data !== null;
  }

  async load(reload = false) {
    //Todo: API Binding
    const n: any = {};

    if (this.data == null || reload === true) {
      this.data = template();
    }

    DeviceEventEmitter.emit("postdataloaded", () => {});
  }

  addItem = (item: PostDataProps) => {
    if (this.data == null) {
      return;
    }

    this.data.push(item);
    DeviceEventEmitter.emit("postdataloaded", () => {});
  };
}

const template = (): PostDataProps[] => {
  return [
    {
      dbid: "psft-unique-id-01",
      location: {
        name: "서울시 강남구",
        isPublic: true,
      },
      content: {
        upload_at: "2024-01-22T00:00:00Z",
        text: null,
        media: [
          {
            url: "https://i.pinimg.com/originals/2f/35/ef/2f35ef6a543a9eccd24c31445040fcd2.gif",
            type: "image",
            size: {
              width: 682,
              height: 682,
            },
          },
        ],
      },
      user: getTemplateDataById("u0004"),
      statistics: {
        like: 12,
        comments: 1,
      },
      detail: null,
    },
    {
      dbid: "pst-unique-id-01",
      location: {
        name: "서울시 강남구",
        isPublic: true,
      },
      content: {
        upload_at: "2024-01-11T00:00:00Z",
        text: "Apple has achieved a remarkable brand value increase, even as iPhone sales have largely plateaued, as its strategy of finding new markets, expanding its ecosystem, and encouraging upgrades to higher-value iPhones has been highly effective. Apple has maintained its position as the dominant player in the premium smartphone market, with a share of 71%.",
        media: [],
      },
      user: getTemplateDataById("u0001"),
      statistics: {
        like: 12,
        comments: 1,
      },
      detail: null,
    },
    {
      dbid: "post-unique-idnm-01",
      location: {
        name: "서울시 강남구",
        isPublic: true,
      },
      content: {
        upload_at: "2024-01-11T00:00:00Z",
        text: "ㅋㅋ",
        media: [
          {
            url: "https://www.dalkora.com/data/file/ent/1182654579_eDOpwEmC_a461b8bef73e98b1e06a8c0bf6623ee2e0df4813.jpg",
            type: "image",
            size: {
              width: 682,
              height: 1024,
            },
          },
          // {
          //   url: "https://cdn.hanryutimes.com/news/photo/202301/58692_66908_3357.jpg",
          //   type: "image",
          //   ratio: 188 / 188,
          // },
          // {
          //   url: "https://libreshot.com/wp-content/uploads/2020/10/beautiful-landscape_D71_9358-free-image-1536x1024.jpg",
          //   type: "image",
          //   ratio: 744 / 496,
          // },
          // {
          //   url: "https://i.pinimg.com/474x/96/e1/e3/96e1e3589e993ef1747ebff7a4c37993.jpg",
          //   type: "image",
          //   ratio: 158 / 351,
          // },
          // {
          //   url: "https://cdn.hanryutimes.com/news/photo/202301/58692_66908_3357.jpg",
          //   type: "image",
          //   ratio: 188 / 188,
          // },
          // {
          //   url: "https://libreshot.com/wp-content/uploads/2020/10/beautiful-landscape_D71_9358-free-image-1536x1024.jpg",
          //   type: "image",
          //   ratio: 744 / 496,
          // },
        ],
      },
      user: getTemplateDataById("u0002"),
      statistics: {
        like: 12,
        comments: 1,
      },
      detail: null,
    },
    {
      dbid: "post-unique-id-01",
      location: {
        name: "서울시 강남구",
        isPublic: true,
      },
      content: {
        upload_at: "2024-01-11T00:00:00Z",
        text: "ㅋㅋ",
        media: [
          {
            url: "https://cdn.dgmagazine.co.kr/news/photo/202312/mn_4514_20231220164326_1.jpg",
            type: "image",
            size: {
              width: 630,
              height: 787,
            },
          },
          // {
          //   url: "https://cdn.hanryutimes.com/news/photo/202301/58692_66908_3357.jpg",
          //   type: "image",
          //   ratio: 188 / 188,
          // },
          // {
          //   url: "https://libreshot.com/wp-content/uploads/2020/10/beautiful-landscape_D71_9358-free-image-1536x1024.jpg",
          //   type: "image",
          //   ratio: 744 / 496,
          // },
          // {
          //   url: "https://i.pinimg.com/474x/96/e1/e3/96e1e3589e993ef1747ebff7a4c37993.jpg",
          //   type: "image",
          //   ratio: 158 / 351,
          // },
          // {
          //   url: "https://cdn.hanryutimes.com/news/photo/202301/58692_66908_3357.jpg",
          //   type: "image",
          //   ratio: 188 / 188,
          // },
          // {
          //   url: "https://libreshot.com/wp-content/uploads/2020/10/beautiful-landscape_D71_9358-free-image-1536x1024.jpg",
          //   type: "image",
          //   ratio: 744 / 496,
          // },
        ],
      },
      user: getTemplateDataById("u0003"),
      statistics: {
        like: 12,
        comments: 1,
      },
      detail: null,
    },
    {
      dbid: "post-unique-id-02",
      location: {
        name: "서울시 강남구",
        isPublic: true,
      },
      content: {
        upload_at: "2024-01-11T00:00:00Z",
        text: "5명의 멤버가 모여 어딘가 자유분방하면서도 결합력 있는 독특한 퍼포먼스를 선보인다. 소녀들이 '재밌게 즐긴다'란 표현이 어울리는 뉴진스만의 청춘 하이틴스러운 컨셉은 ‘자연스럽다’라는 느낌을 주어, 뉴진스가 많은 대중들에게 사랑 받는 데에 크게 기여한다.",
        media: [
          {
            url: "https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/a8a17e27-f08b-484a-a5c1-a4e940e0364e.jpg",
            type: "image",
            // ratio: 158 / 351,
            size: {
              width: 251,
              height: 161,
            },
          },
          {
            url: "https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/b98dc63d-f626-4ea0-9d56-5764b4d963dc.jpg",
            type: "image",
            //ratio: 188 / 188,
            size: {
              width: 251,
              height: 161,
            },
          },
          // {
          //   url: "https://img.etnews.com/news/article/2022/10/30/article_30091212839104.jpg",
          //   type: "image",
          //   //ratio: 744 / 496,
          // },
        ],
      },
      user: getTemplateDataById("u0001"),
      statistics: {
        like: 12,
        comments: 1,
      },
      detail: null,
    },
    {
      dbid: "post-unique-id-03",
      location: {
        name: "서울시 강남구",
        isPublic: true,
      },
      content: {
        upload_at: "2024-01-11T00:00:00Z",
        text: "너구리 아니고 라쿤",
        media: [
          {
            url: "https://pbs.twimg.com/media/DuI1aO2W0AAiYPt.jpg",
            type: "image",
            // ratio: 158 / 351,
          },
          {
            url: "https://thumb.mt.co.kr/06/2019/10/2019101809313679160_1.jpg/dims/optimize/",
            type: "image",
            // ratio: 188 / 188,
          },
          {
            url: "data:image/jpeg;base64,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",
            type: "image",
            // ratio: 744 / 496,
          },
          {
            url: "https://pbs.twimg.com/media/DuI1aO2W0AAiYPt.jpg",
            type: "image",
            // ratio: 158 / 351,
          },
        ],
      },
      user: getTemplateDataById("u0001"),
      statistics: {
        like: 12,
        comments: 1,
      },
      detail: null,
    },
  ];
};
