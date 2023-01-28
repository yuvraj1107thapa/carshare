import React from "react";
import "./SidebarLeft.css";
import { Link } from "react-router-dom";
import SidebarLeftRow from "../common/SidebarLeftRow";

function SidebarLeft({ user }) {
  return (
    <div className="sidebar">
      {/* <Link to="/">
        <SidebarLeftRow
          avatar
          ImageLink={user?.photoURL}
          title={user?.displayName}
        />
      </Link>
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/7_gcmlwrelX.png"
        title="COVID-19 Information Centre"
      />
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
        title="Find Friends"
      />
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
        title="Groups"
      />
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
        title="Marketplace"
      />
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"
        title="Videos"
      />
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"
        title="Events"
      />
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png"
        title="Memories"
      />
      <SidebarLeftRow
        ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png"
        title="Saved"
      />
      <SidebarLeftRow dropdown ImageLink="null" title="See more" />
      <div class="hr" />
      <div class="policies">
        <p>Privacy</p>
        <p class="dot">·</p>
        <p>Terms</p>
        <p class="dot">·</p>
        <p>Advertising</p>
        <p class="dot">·</p>
        <p>Ad choices</p>
        <i class="ads" />
        <p class="dot">·</p>
        <p>Cookies</p>
        <p class="dot">·</p>
        <p>More</p>
        <p class="dot">·</p>
        <p>Facebook © 2020</p>
      </div> */}
    </div>
  );
}

export default SidebarLeft;
