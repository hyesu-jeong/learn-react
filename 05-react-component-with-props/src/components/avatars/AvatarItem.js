import { createElement as h } from "https://esm.sh/react";

function AvatarItem({ id, title } /* props */) {
  return h(
    "li",
    {
      key: id,
      className: "item",
    },
    h("img", {
      src: `/avatars/face_${id}.webp`,
      alt: "",
      className: "profile",
    }),
    h(
      "div",
      {
        className: "indicator",
      },
      h("img", {
        src: "/icons/handle.svg",
      })
    )
  );
}

export default AvatarItem;
