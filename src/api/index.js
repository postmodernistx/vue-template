export default {
  someAPIcall(path) {
    return fetch(`some-url`)
      .then((res) => res.json().then((json) => ({
        status: 200,
        data: json,
      }))
        .catch((error) => ({ status: 500, msg: error })));
  },
};
