Feature: data-table

  Scenario: Raw data table
   Given a raw table
    | Cucumber     | Cucumis sativus |
    | Burr Gherkin | Cucumis anguria |

  Scenario: Rows data table
   Given a rows table
    | Vegetable | Rating |
    | Apricot   | 5      |
    | Brocolli  | 2      |
    | Cucumber  | 10     |

  Scenario: Row hash data table
   Given a rows hash table
    | Cucumber     | Cucumis sativus |
    | Burr Gherkin | Cucumis anguria |

  Scenario: Hashes data table
   Given a hashes table
    | Vegetable | Rating |
    | Apricot   | 5      |
    | Brocolli  | 2      |
    | Cucumber  | 10     |
