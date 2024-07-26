import { createElement as h } from "https://esm.sh/react";
import AvatarItem from "../components/avatars/AvatarItem.js";

function AvatarListPage() {
  return h(
    "ul",
    {
      className: "AvatarList",
    },
    h("li", null, h(Avatar, { name: "야무", photo: "man-1.webp" })),
    h("li", null, h(Avatar, { name: "범쌤", photo: "man-2.webp" }))
  );
}

export default AvatarListPage;
