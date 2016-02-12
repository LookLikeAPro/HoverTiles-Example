import React, {Component, PropTypes} from "react";

import Apollo from "hovertile/Apollo";
import Bubba from "hovertile/Bubba";
import Chico from "hovertile/Chico";
import Dexter from "hovertile/Dexter";
import Duke from "hovertile/Duke";
import Goliath from "hovertile/Goliath";
import Hera from "hovertile/Hera";
import Honey from "hovertile/Honey";
import Jazz from "hovertile/Jazz";
import Julia from "hovertile/Julia";
import Kira from "hovertile/Kira";
import Layla from "hovertile/Layla";
import Lexi from "hovertile/Lexi";
import Lily from "hovertile/Lily";
import Marley from "hovertile/Marley";
import Milo from "hovertile/Milo";
import Ming from "hovertile/Ming";
import Moses from "hovertile/Moses";
import Oscar from "hovertile/Oscar";
import Phoebe from "hovertile/Phoebe";
import Romeo from "hovertile/Romeo";
import Roxy from "hovertile/Roxy";
import Ruby from "hovertile/Ruby";
import Sadie from "hovertile/Sadie";
import Sarah from "hovertile/Sarah";
import Selena from "hovertile/Selena";
import Steve from "hovertile/Steve";
import Terry from "hovertile/Terry";
import Winston from "hovertile/Winston";
import Zoe from "hovertile/Zoe";

import TileContent from "hovertile/Content";
import TileHoverContent from "hovertile/HoverContent";
import TileClickbox from "hovertile/Clickbox";
import TileBackground from "hovertile/Background";

function randomImage() {
	return `static/asset/${Math.floor(Math.random()*33)+1}.jpg`;
}

export default class Application extends Component {
	render() {
		return (<div>
			<Apollo>
				<TileBackground><img src={randomImage()}/></TileBackground>
				<TileContent>Apollo</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Apollo>
			<Bubba image={randomImage()}>
				<TileContent>Bubba</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Bubba>
			<Chico image={randomImage()}>
				<TileContent>Chico</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Chico>
			<Dexter image={randomImage()}>
				<TileContent>Dexter</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Dexter>
			<Duke image={randomImage()}>
				<TileContent>Duke</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Duke>
			<Goliath image={randomImage()}>
				<TileContent>Goliath</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Goliath>
			<Hera image={randomImage()}>
				<TileContent>Hera</TileContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Hera>
			<Honey image={randomImage()}>
				<TileContent>Honey</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Honey>
			<Jazz image={randomImage()}>
				<TileContent>Jazz</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Jazz>
			<Julia image={randomImage()}>
				<TileContent>Julia</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Julia>
			<Kira image={randomImage()}>
				<TileContent>Kira</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Kira>
			<Layla image={randomImage()}>
				<TileContent>Layla</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Layla>
			<Lexi image={randomImage()}>
				<TileContent>Lexi</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Lexi>
			<Lily image={randomImage()}>
				<TileContent>Lily</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Lily>
			<Marley image={randomImage()}>
				<TileContent>Marley</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Marley>
			<Milo image={randomImage()}>
				<TileContent>Milo</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Milo>
			<Ming image={randomImage()}>
				<TileContent>Ming</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Ming>
			<Moses image={randomImage()}>
				<TileContent>Moses</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Moses>
			<Oscar image={randomImage()}>
				<TileContent>Oscar</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Oscar>
			<Phoebe image={randomImage()}>
				<TileContent>Phoebe</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Phoebe>
			<Romeo image={randomImage()}>
				<TileContent>Romeo</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Romeo>
			<Roxy image={randomImage()}>
				<TileContent>Roxy</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Roxy>
			<Ruby image={randomImage()}>
				<TileContent>Ruby</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Ruby>
			<Sadie image={randomImage()}>
				<TileContent>Sadie</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Sadie>
			<Sarah image={randomImage()}>
				<TileContent>Sarah</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Sarah>
			<Selena image={randomImage()}>
				<TileContent>Selena</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Selena>
			<Steve image={randomImage()}>
				<TileContent>Steve</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Steve>
			<Terry image={randomImage()}>
				<TileContent>Terry</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Terry>
			<Winston image={randomImage()}>
				<TileContent>Winston</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Winston>
			<Zoe image={randomImage()}>
				<TileContent>Zoe</TileContent>
				<TileHoverContent>testtesttet</TileHoverContent>
				<TileClickbox><a>test</a></TileClickbox>
			</Zoe>
		</div>);
	}
}
