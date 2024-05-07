const data = {
  document: {
    name: "RAPPORT DE VÉRIFICATION",
    number: "1842747-002-1",
    date: "2023-01-09",
    pages_number: 35,
  },
  intervention_control: {
    name: "Vérification générale périodique des équipements mécaniques",
    start_date: "2023-01-06",
    end_date: "2023-01-06",
    company: "Apave",
    agency: "AGENCE DE Evreux",
    inspector: "Mr BUISSON MATHIEU",
    customer: "MECA INOX",
    factory: "Gisors",
    elements_number: 18,
    tasks_number: 5,
  },
  elements: [
    {
      number: 1,
      page: 3,
      inspector: "Mr BUISSON MATHIEU",
      name: "Chariot de manutention à conducteur accompagnant",
      RP1: "",
      RP2: "",
      factory: "",
      building: "",
      regulation: "Levage",
      element_type: "Appareil",
      fabricant: "HYSTER",
      n_serie: "B441X03299A",
      modele: "S1.2-34",
      marquage_ce: true,
      mobilite: "mobile",
      categorie_d_equipement_fixe: "",
      type_de_pont_roulant: "",
      type_de_palan_fixe: "",
      categorie_d_equipement_mobile: "Chariot élévateur",
      type_de_chariot_elevateur: "Accompagnant",
      type_de_palan_mobile: "",
      type_de_treuil: "",
      type_de_support: "",
      type_de_cric: "",
      type_d_appareil_sur_vehicule: "",
      type_d_appareil_de_chantier: "",
      energie: "Motorisé",
      l_element_de_levage_possede_t_il_un_auxiliaire_var: "",
      nom_auxiliaire_n_1: "",
      cmu_auxiliaire_n_1: "",
      nom_auxiliaire_n_2: "",
      cmu_auxiliaire_n_2: "",
      nom_auxiliaire_n_3: "",
      cmu_auxiliaire_n_3: "",
      charge_maximale_d_utilisation_kg_var: "1 200,00",
      etat_a_l_achat: "",
      date_de_fabrication: "2003",
      date_de_mise_en_service: "",
    },

    {
      number: 6,
      page: 16,
      inspector: "Mr BUISSON MATHIEU",
      name: "Porte automatique",
      start_date: "2023-01-06",
      RP1: "",
      RP2: "",
      factory: "",
      building: "",
      regulation: "Portes et portails",
      element_type: "Porte",
      fabricant: "UNIACCESS",
      n_serie: "",
      modele: "ROLL",
      mode_de_fonctionnement: "Automatique",
      mode_d_ouverture: "Verticale",
      mode_d_ouverture_horizontale: "",
      mode_d_ouverture_verticale: "",
      materiau: "",
      marquage_ce: true,
      usage: "Destinée au passage des véhicules",
      date_de_mise_en_service: "2014",
    },
  ],
  tasks: [
    {
      element_number: 6,
      description: "installation",
      task_to_do:
        "Zone de fin de fermeture : Remettre la barre palpeuse en état de fonctionnnement.",
      suggested_priority: "",
      first_emission_date: "",
      observation_number: "",
      controls_name: "Vérification périodique",
    },
    {
      element_number: 6,
      description: "installation",
      task_to_do:
        "Feu orange clignotant : Assurer le fonctionnement de la signalisation clignotante orange afin qu'elle soit visible des deux côtés, durant les phases complètes de déplacement du tablier",
      suggested_priority: "",
      first_emission_date: "",
      observation_number: "",
      controls_name: "Vérification périodique",
    },
    {
      element_number: 6,
      description: "ORGANES DE SERVICE ET DE MANOEUVRE",
      task_to_do:
        "Identification et état des organes de service : Identifier les organes de service en fonction des mouvements commandés.",
      suggested_priority: "",
      first_emission_date: "",
      observation_number: "",
      controls_name: "Vérification périodique",
    },
  ],
};

const elements = data.elements;

export default function getKeys() {
  return [
    ...new Set(
      elements
        .map((element) => Object.keys(element))
        .reduce((acc, val) => acc.concat(val), [])
    ),
  ];
}
