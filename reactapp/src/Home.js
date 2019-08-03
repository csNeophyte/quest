import React, {useContext} from 'react';
import Jumbotron from'./Jumbotron';
import NavBar from './NavBar';
import JigSaw from './JigSaw';
import RegisterLogin from './RegisterLogin';
import {InfoGroup, Info } from './InfoGroup';
import { Avatar } from './AvatarGroup';
import {AppContext} from "./App";

const Home = () => {

    const [state, setState] = useContext(AppContext)

  return (

          <div className="Home">

      <NavBar />
      <Jumbotron img="img/bg-masthead.jpg"/>
      <InfoGroup>
        <Info
            iconClass="fas fa-user-shield"
            title="Strength of Steel"
            caption="Without our armor, can you really defeat your foes?"
        />
        <Info
            iconClass="fas fa-arrows-alt"
            title="Mettle of Iron"
            caption="Rivers of magic run within, so don't swim in the shallows, wade through the depths!"
        />
        <Info
            iconClass="fas fa-heart"
            title="Valour of Giants"
            caption="Wield your heart like the weapon it is."
        />
      </InfoGroup>
      <JigSaw
          order={2}
          img="img/bg-showcase-1.png"
          title="Dictated by the Augurs of Greece."
          caption="A scroll shall burst forth from the flames of Hephaestus and be read by the voice of Cassandra. Steel yourself to hear a prophecy of doom that may or may not end in your victory. Gather your mighty Steed, then heed forth and heed well."
          />

        <JigSaw
            order={1}
            img="img/bg-showcase-2.jpg"
            title="Destroy the roots of all evil."
            caption="Traverse through all nine circles of Hell and back with fire in your heart and peace in your mind. Plunder the depths of the devil and find yourself immune to hellfire. You will gain many treasures, slay mighty foes but you will lose that which you hold most dear."
        />

        <JigSaw
            order={2}
            img="img/bg-showcase-3.png"
            title="Rise forth and claim your treasure."
            caption="Find your designated seat in the Hallowed Halls of any pantheon you choose. Fair maidens and the Cornucopia of Pan await you. Feast like Dionysus, and lay your weapons down at the fount of Athena. Much wisdom is to be gained here."
        />


        <InfoGroup className="testimonials" title="Hear from the Pantheons...">
        <Avatar
            img="img/testimonials-1.png"
            title="The Tuatha Dé Danann"
            caption='"The Irish Gods beckon. This is your chance to be a Druid and bond with the Elementals of Gaia."'
            />

            <Avatar
                img="img/testimonials-2.jpg"
                title="The Olympians"
                caption='"Taste the nectar and ambrosia of Gods. Immortality is within your reach."'
            />

            <Avatar
                img="img/testimonials-3.png"
                title="The Æsir"
                caption='"Fight bravely to enter the Halls of Valhalla and befriend the Valkyries!"'
            />

        </InfoGroup>

        <Jumbotron img="img/bg-masthead.jpg"/>

        {state.signUpForm && <RegisterLogin />}

    </div>

  );
};

export default Home;
