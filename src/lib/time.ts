class Time {
  private static _instance: Time;

  public static get instance() {
    return this._instance || (this._instance = new Time());
  }

  public convertSimpleTime(date: string) {
    const targetTime = new Date(date);
    // 현재 시간을 얻기
    const currentTime = new Date(new Date().toISOString());
    // 시간 차이 계산 (밀리초 단위)
    const timeDifference = currentTime.getTime() - targetTime.getTime();

    // 분 단위와 시간 단위 계산
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);

    // 결과 생성
    if (minutesDifference == 0) {
      return "지금";
    } else if (minutesDifference < 60) {
      return `${minutesDifference}분 전`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference}시간 전`;
    } else {
      // Date 객체를 이용하여 날짜를 표시
      const month = targetTime.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
      const day = targetTime.getDate();
      return `${month}월 ${day}일`;
    }
  }
}

export default Time.instance;
