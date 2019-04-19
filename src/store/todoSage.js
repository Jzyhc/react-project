function* todoSage() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  }
  
  export default todoSage;