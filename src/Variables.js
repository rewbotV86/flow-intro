// @flow

  function acceptsBoolean(value: boolean) {
    // ...
  }
  acceptsBoolean("foo");

  function acceptsObject(value: { foo?: string }) {
    // ...
  }
  acceptsObject({ foo: null });
  acceptsObject({ foo: undefined });
  acceptsObject({});   

  function acceptsTwo(value: 2) {
    // ...
  }
  acceptsTwo(3);