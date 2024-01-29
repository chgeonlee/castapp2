import { DeviceEventEmitter } from "react-native";

export interface UserDataProps {
  dbid: string;
  id: string;
  name: string;
  thumb: string | null;
  intr: string;
  detail: any;
}
type UserResourceDataType = { [dbid: string]: UserDataProps };
interface UserMetaDataProps extends Omit<UserDataProps, "detail"> {}

export enum UserResourceEventEnum {
  LOADED_DATA = "userDataLoaded",
  LOADED_DATA_DETAIL = "userDetailDataLoaded",
  LOADED_DATA_ENTIRE = "userEntireDataLoaded",
}

export default class UserResource {
  private static _instance: UserResource;

  public static get instance() {
    return this._instance || (this._instance = new UserResource());
  }

  private constructor() {}

  private data: UserResourceDataType = {};

  getLoggedUserData = () => {
    return { ...templateUserData, detail: templateUserDetailData };
  };

  getDataByUserUniqueId(dbid: string) {
    if (this.data[dbid] === undefined) {
      return;
    }

    return this.data[dbid];
  }

  has(dbid: string, detail = false) {
    if (this.data[dbid] == undefined) {
      return false;
    }
    if (detail == false) {
      return true;
    } else {
      return this.data[dbid].detail != null;
    }
  }

  //[GET] 유저 메타데이터
  async load(dbid: string, reload: boolean = false) {
    if (this.data[dbid] !== undefined) {
      DeviceEventEmitter.emit(UserResourceEventEnum.LOADED_DATA, dbid);
      return;
    }

    //Todo: API Binding

    const responseData = templateData[dbid];
    this.data[dbid] = responseData;
    DeviceEventEmitter.emit(UserResourceEventEnum.LOADED_DATA, dbid);
  }

  //[GET] 상세 유저 데이터
  async inflate(dbid: string, reload: boolean = false) {
    if (reload == false && this.data[dbid]?.detail) {
      DeviceEventEmitter.emit(UserResourceEventEnum.LOADED_DATA_DETAIL, dbid);
      return;
    }

    //Todo: API Binding
    const responseData = templateUserDetailData;
    this.data[dbid].detail = responseData;
    DeviceEventEmitter.emit(UserResourceEventEnum.LOADED_DATA_DETAIL, dbid);
  }

  //[GET] 유저 메타 + 상세 데이터
  async entire(dbid: string, reload = false) {
    if (reload == false && this.data[dbid] && this.data[dbid].detail) {
      return;
    }

    //Todo: API Binding
    const responseData = templateData[dbid];
    responseData.detail = templateUserDetailData;

    this.data[dbid] = responseData;
    DeviceEventEmitter.emit(UserResourceEventEnum.LOADED_DATA_ENTIRE, dbid);
  }

  //[GET] 유저 데이터 검색
  async search(value: string) {}
}

const templateData = {
  u0001: {
    dbid: "u0001",
    id: "chgeon.lee",
    name: "충건리",
    intr: "충건은 충건이다",
    thumb:
      "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    detail: null,
  },
  u0002: {
    dbid: "u0002",
    id: "prnewswire",
    name: "PRNEWSWIRE",
    intr: "Globe Newswire",
    thumb: "https://cdn.hanryutimes.com/news/photo/202301/58692_66908_3357.jpg",
    detail: null,
  },
  u0003: {
    dbid: "u0003",
    id: "ugni502",
    name: "ugni502",
    intr: "송쿨쩍이",
    thumb:
      "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
    detail: null,
  },
  u0004: {
    dbid: "u0004",
    id: "myworkspace",
    name: "마이워크스페이스",
    intr: "럭셔리한 인테리어와 업무에 꼭 필요하지 않은 서비스를 함께 포장한 고가의 공유사무실이 많습니다.마이워크스페이스는 초기 스타트업들이 부담없이 업무에 집중할 수 있는 최적의 환경을 만들어가고 있습니다.",
    thumb:
      "data:image/png;base64,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",
    detail: null,
  },
} as any;

const getTemplateDataById = (dbid: string) => {
  return templateData[dbid];
};

export { getTemplateDataById };

// deprecated ....

const templateUserData2 = {
  dbid: "user-unique-id-01",
  id: "chgeon.lee",
  name: "충건 리",
  introduceText:
    "잡스는 초등학교 시절 학교를 자주 빼먹는 불량 청소년이자 사고뭉치였다. 잡스의 4학년 담임이었던 하이 힐 선생님이 돈으로 구슬리는 것으로 겨우 학교생활을 하던 그는 히스키트라는 아마추어 전자공학 키트를 얻는 순간 인생의 전환점에 도착하게 된다. 그는 이 키트 덕분에 어려서부터 전자제품의 작동원리를 익히게 되었다.[5][6] 잡스는 캘리포니아주 쿠퍼티노에 위치한 쿠퍼티노 중학교와 홈스테드 고등학교를 다녔는데, 12살이었던 고등학교 시절 전화번호부를 보고 휴렛 패커드사의 CEO인 빌 휴렛에게 전화를 걸어 주파수 계수기를 만들고 싶다며 남는 부품이 있다면 줄 수 있는지 물어보았다. 빌 휴렛은 그 말을 들어주었으며 결국 잡스는 팰로앨토의 휴렛 패커드사에서 방과후 수업을 들었고 스티브 워즈니악과 함께 휴렛 패커드사에 여름 동안 임시 채용되기도 했다. 1972년 리드 칼리지에 다니다 1학기만 수강한 후 중퇴하였으며, 1974년에는 캘리포니아로 돌아와 아타리에서 일을 하였다. 후에 워즈니악의 권고로 홈브루 컴퓨터 클럽에 나가게 된다.",
  thumbnail:
    "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
  detail: null,
};

const templateUserData = {
  dbid: "u0001",
  id: "chgeon.lee",
  name: "충건리",
  intr: "충건은 충건이다",
  thumb:
    "https://i.pinimg.com/474x/64/62/21/6462217a6f50984ec7a1fe049fb9f26b.jpg",
  detail: null,
};

const templateUserDetailData = {
  contents: {
    post: [
      {
        dbid: "post-unique-id-01",
        location: {
          name: "서울시 강남구",
          isPublic: true,
        },
        content: {
          upload_at: "2024-01-11T00:00:00Z",
          text: "마이워크스페이스 강남역점 8월 오픈",
          media: [
            {
              url: "https://www.datocms-assets.com/81523/1671070387-mws-news-branch4-open-featured-v3.jpg?auto=format",
              type: "image",
              ratio: 158 / 351,
            },
            {
              url: "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMjdfNDUg/MDAxNjE0Mzk3NDgyMjk3.CXLds_p9kNFEC6NSINGGT1hLIkHJrxZ0xC4nusKzmH8g.KrNz5S_tTETp7LgZ0D1Qjmj2-fbfF6x5bO9srqJ59hYg.JPEG.mortareg/%EF%BB%BF%EB%A7%88%EC%9D%B4%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4_4%ED%98%B8%EC%A0%90.jpg?type=w800",
              type: "image",
              ratio: 188 / 188,
            },
            {
              url: "https://www.datocms-assets.com/81523/1691028633-1.jpg?auto=format",
              type: "image",
              ratio: 744 / 496,
            },
          ],
        },
        user: templateUserData,
        statistics: {
          like: 12,
          comments: 1,
        },
        detail: null,
      },
    ],
    premium: [],
    marking: [],
  },
};
