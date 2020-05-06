# State in React Components

#### 1. Instance of App component is created

#### 2. App components 'constructor' function gets called

#### 3. State object is created and assigned to the 'this.state'property

#### 4. We call geolocation service

#### 5. React calls the component render method

#### 6. App returns JSX, gets rendered to page as HTML

wait...

#### 7. We get result of geolocaction

#### 8. We update our state object with a call to 'this.setState'

#### 9. React sees that we have updated the state of a component

#### 10. React calls our 'render' method a second time

#### 11. Render method returns some (updated) JSX

#### 12. React takes that JSX and updates content on the screen
