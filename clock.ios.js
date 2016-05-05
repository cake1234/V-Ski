'use strict';
 
var React = require('react-native');
var Firebase = require('firebase');
var {
    DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
    PickerIOS,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
    ScrollView,
  Component
} = React;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 15,
      marginBottom: 1,
    textAlign: 'left',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
       padding: 20,
    marginTop: 25,
      backgroundColor: '#123456',
  },
    scrollView:{
        flex:1,
        borderBottomWidth:100,
    },
    button: {
  flex: 1,
  backgroundColor: '#FFFFFF',
  borderColor: '#FFFFFF',
  marginTop: 20,
        marginBottom: 40,
  
},
    buttonText: {
  fontSize: 18,
  color: '#123456',
  alignSelf: 'center'
},
    
    contentContainerStyle:{
    flex:1,
}
});

var PickerItemIOS = PickerIOS.Item;

var myFirebaseRef = new Firebase('https://vski.firebaseio.com');

var LIGNE_STATION = {
  a: {
    ligne: 'A',
    station: ['Achères - Grand-Cormier','Achères-Ville','Auber','Boissy-Saint-Léger','Bry-sur-Marne','Bussy-Saint-Georges','Cergy-le-Haut','Cergy-Préfecture','Cergy-Saint-Christophe','Champigny','Charles-de-Gaulle - Étoile','Châtelet - Les Halles','Chatou - Croissy','Conflans-Fin-dOise', 'Fontenay-sous-Bois','Gare de Lyon','Houilles - Carrières-sur-Seine','Joinville-le-Pont','La Défense','La Varenne – Chennevières','Le Parc de Saint-Maur','Le Vésinet - Le Pecq','Le Vésinet-Centre', 'Lognes','Maisons-Laffitte','Marne-la-Vallée – Chessy','Nanterre-Préfecture','Nanterre-Université', 'Nanterre-Ville','Nation','Neuilly-Plaisance','Neuville-Université','Nogent-sur-Marne','Noisiel','Noisy - Champs','Noisy-le-Grand - Mont dEst','Poissy','Rueil-Malmaison','Saint-Germain-en-Laye','Saint-Maur - Créteil','Sartrouville','Sucy - Bonneuil','Torcy','Vincennes','Val dEurope','Val de Fontenay'],
  },
  b: {
    ligne: 'B',
    station: ['Aéroport Charles-de-Gaulle 1','Aéroport Charles-de-Gaulle 2 TGV','Antony','Arcueil - Cachan','Aulnay-sous-Bois','Bagneux','Bourg-la-Reine','Bures-sur-Yvette','Châtelet - Les Halles','Cité Universitaire','Courcelle-sur-Yvette','Denfert-Rochereau','Drancy','Fontaine Michalon','Fontenay-aux-Roses','Gare du Nord','Gentilly','Gif-sur-Yvette','La Courneuve - Aubervilliers','La Croix de Berny','La Hacquinière','La Plaine - Stade de France','Laplace','Le Blanc-Mesnil','Le Bourget','Le Guichet','Les Baconnets','Lozère','Luxembourg','Massy - Palaiseau','Massy - Verrières','Mitry - Claye','Orsay-Ville','Palaiseau','Palaiseau - Villebon','Parc de Sceaux','Parc des Expositions','Port-Royal','Robinson','Saint-Michel - Notre-Dame','Saint-Rémy-lès-Chevreuse','Sceaux','Sevran - Beaudottes','Sevran - Livry','Vert-Galant','Villeparisis - Mitry-le-Neuf','Villepinte'],
  },
  c: {
    ligne: 'C',
    station: ['Ablon','Arpajon','Athis-Mons','Avenue du Président-Kennedy','Avenue Foch','Avenue Henri-Martin','Bibliothèque François-Mitterrand','Bièvres','Boulainvilliers','Bouray','Brétigny','Breuillet - Bruyères-le-Châtel','Breuillet - Village','Cernay','Chamarande','Champ de Mars - Tour Eiffel','Chaville - Vélizy','Chemin dAntony','Chilly-Mazarin','Choisy-le-Roi','Dourdan','Dourdan - La Forêt','Égly','Épinay-sur-Orge','Épinay-sur-Seine','Ermont - Eaubonne','Étampes','Étréchy','Franconville - Le Plessis-Bouchard','Gare dAusterlitz','Gennevilliers','Gravigny-Balizy','Igny','Invalides','Issy','Issy - Val de Seine','Ivry-sur-Seine','Javel','Jouy-en-Josas','Juvisy','La Norville - Saint-Germain-lès-Arpajon','Lardy','Les Ardoines','Les Grésillons','Les Saules','Longjumeau','Marolles-en-Hurepoix','Massy - Palaiseau','Massy - Verrières','Meudon-Val-Fleury','Montigny - Beauchamp','Musée dOrsay','Neuilly - Porte Maillot','Orly-Ville','Pereire - Levallois','Petit Jouy - Les Loges','Petit Vaux','Pierrelaye','Pont de lAlma','Pont de Rungis - Aéroport dOrly','Pont du Garigliano','Pontoise','Porchefontaine','Porte de Clichy','Rungis - La Fraternelle','Saint-Chéron','Saint-Cyr','Sainte-Geneviève-des-Bois','Saint-Gratien','Saint-Martin-dÉtampes','Saint-Michel - Notre-Dame','Saint-Michel-sur-Orge','Saint-Ouen','Saint-Ouen-lAumône','Saint-Ouen-lAumône-Liesse','Saint-Quentin-en-Yvelines - Montigny-le-Bretonneux','Savigny-sur-Orge','Sermaise','Vauboyen','Versailles-Chantiers','Versailles-Château-Rive-Gauche','Villeneuve-le-Roi','Viroflay-Rive-Gauche','Vitry-sur-Seine'],
  },
  d: {
    ligne: 'D',
    station: ['Ballancourt','Boigneville','Boissise-le-Roi','Boussy-Saint-Antoine','Boutigny','Brunoy','Buno - Gironville','Cesson','Chantilly - Gouvieux','Châtelet - Les Halles','Combs-la-Ville - Quincy','Corbeil-Essonnes','Creil','Créteil-Pompadour','Essonnes - Robinson','Évry - Courcouronnes Centre','Évry-Val-de-Seine','Gare de Lyon','Gare du Nord','Garges - Sarcelles','Goussainville','Grand Bourg','Grigny-Centre','Juvisy','La Borne Blanche','La Ferté-Alais','Le Bras de Fer - Évry - Génopole','Le Coudray-Montceaux','Le Mée','Le Plessis-Chenet','Le Vert de Maisons','Les Noues','Lieusaint - Moissy','Louvres','Maisons-Alfort - Alfortville','Maisse','Malesherbes','Melun','Mennecy','Montgeron - Crosne','Moulin-Galant','Orangis - Bois de lÉpine','Orry-la-Ville - Coye','Pierrefitte - Stains','Ponthierry - Pringy','Ris-Orangis','Saint-Denis','Saint-Fargeau','Savigny-le-Temple - Nandy','Stade de France - Saint-Denis','Survilliers - Fosses','Vigneux-sur-Seine','Villabé','Villeneuve-Saint-Georges','Villeneuve-Triage','Villiers-le-Bel - Gonesse - Arnouville','Viry-Châtillon','Vosves','Yerres'],
  },
  e: {
    ligne: 'E',
    station: ['Bondy','Chelles - Gournay','Émerainville - Pontault-Combault','Gagny','Gretz-Armainvilliers','Haussmann - Saint-Lazare','Le Chénay - Gagny','Le Raincy - Villemomble - Montfermeil','Les Boullereaux - Champigny','Les Yvris - Noisy-le-Grand','Magenta','Nogent - Le Perreux','Noisy-le-Sec','Ozoir-la-Ferrière','Pantin','Roissy-en-Brie','Rosa Parks','Rosny-Bois-Perrier','Rosny-sous-Bois','Tournan','Val-de-Fontenay','Villiers-sur-Marne - Le Plessis-Trévise'],
  },
};

class Clock extends Component {
   
    
    
    onDateChange(date) {
    this.setState({date: date});
      }

 constructor(props) {
    super(props);
    this.state = {
      ligneMake: 'e',
        stationIndex:1,
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };
     
  }

 
 render() {
    var make = LIGNE_STATION[this.state.ligneMake];
    var selectionString = make.ligne+ ' ' + make.station[this.state.stationIndex];
    return (
      <View style={styles.container}> 
        <ScrollView ref='scrollview' style={styles.scrollview} contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.description}>Choisi une ligne:</Text>
        <PickerIOS
        itemStyle={{fontSize: 30, color: 'white', fontWeight: '500'}}
          selectedValue={this.state.ligneMake}
          onValueChange={(ligneMake) => this.setState({ligneMake, stationIndex: 0})}>
          {Object.keys(LIGNE_STATION).map((ligneMake) => (
            <PickerItemIOS
              key={ligneMake}
              value={ligneMake}
              label={LIGNE_STATION[ligneMake].ligne}
            />
          ))}
        </PickerIOS>
        
        <Text style={styles.description}>Choisi une station du RER  {make.ligne}:</Text>
        <PickerIOS
        itemStyle={{fontSize: 15, color: 'white', fontWeight: '500'}}
          selectedValue={this.state.stationIndex}
          key={this.state.ligneMake}
          onValueChange={(stationIndex) => this.setState({stationIndex})}>
          {LIGNE_STATION[this.state.ligneMake].station.map((stationName, stationIndex) => (
            <PickerItemIOS
              key={this.state.ligneMake + '_' + stationIndex}
              value={stationIndex}
              label={stationName}
            />
          ))}
        </PickerIOS>
       
        
           <Text style={styles.description}>Vous avez sélectionné: {selectionString}</Text>
           
           <TouchableHighlight style={styles.button}
               onPress={() => myFirebaseRef.set({
                        ligne:make.ligne,
      heure: this.state.date.toLocaleTimeString(),
      station: make.station[this.state.stationIndex],
    })}>
    <Text style={styles.buttonText}>Go</Text>
  </TouchableHighlight>
    <Text style={styles.description}>Choisi l'horaire:</Text>
        
          <DatePickerIOS
            date={this.state.date}
            mode="time"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange.bind(this)}
            minuteInterval={10}/>
    <Text>babla</Text><Text>babla</Text><Text>babla</Text><Text>babla</Text><Text>babla</Text>
           </ScrollView>
      </View>
    );
  }
  
};
module.exports = Clock;
