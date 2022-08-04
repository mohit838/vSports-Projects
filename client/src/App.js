import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Login from "./Components/Auth/Login/Login";
import Registration from "./Components/Auth/Reg/Registration";
import Home from "./Components/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboards/DashboardSetup/Dashboard";
import TournamentDashBoard from "./Components/Dashboards/TournamentDashBoard/TournamentDashBoard";
import TeamDashboard from "./Components/Dashboards/TeamsDashboard/TeamDashboard";
import PlayerDashBoard from "./Components/Dashboards/PlayerDashbaord/PlayerDashBoard";
import ProfileDashboard from "./Components/Dashboards/ProfileDashboard/ProfileDashboard";
import DashBoardHome from "./Components/Dashboards/DashboardSetup/DashBoardHome/DashBoardHome";
import NewTeam from "./Components/Dashboards/TeamsDashboard/NewTeam/NewTeam";
import AllTeams from "./Components/Dashboards/TeamsDashboard/AllTeams/AllTeams";
import NewModerator from "./Components/Dashboards/TeamsDashboard/NewModerator/NewModerator";
import AllPlayers from "./Components/Dashboards/ProfileDashboard/AllPlayers/AllPlayers";
import NewPlayers from "./Components/Dashboards/ProfileDashboard/NewPlayers/NewPlayers";
import TwoTeams from "./Components/Dashboards/DashboardSetup/DashBoardHome/Bracket/Two/TwoTeams";
import FourTeams from "./Components/Dashboards/DashboardSetup/DashBoardHome/Bracket/FourTeams/FourTeams";
import EightTeams from "./Components/Dashboards/DashboardSetup/DashBoardHome/Bracket/EightTeams/EightTeams";
import AddTeamForBracket from "./Components/Dashboards/DashboardSetup/DashBoardHome/Bracket/AddTeamForBracket/AddTeamForBracket";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Visible to all */}
          <Route path="/" element={<Home />} />

          {/* Private Route */}
          <Route element={<PrivateRoute />}>
            {/* Dashboard Route*/}
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="" element={<DashBoardHome />}>
                <Route path="" element={<AddTeamForBracket />} />
                <Route path="two-team" element={<TwoTeams />} />
                <Route path="four-team" element={<FourTeams />} />
                <Route path="eight-team" element={<EightTeams />} />
              </Route>
              <Route path="profile" element={<ProfileDashboard />} />
              <Route path="tournament" element={<TournamentDashBoard />} />
              <Route path="team" element={<TeamDashboard />}>
                <Route path="" element={<AllTeams />} />
                <Route path="create-team" element={<NewTeam />} />
                <Route path="create-moderator" element={<NewModerator />} />
              </Route>
              <Route path="player" element={<PlayerDashBoard />}>
                <Route path="" element={<AllPlayers />} />
                <Route path="create-player" element={<NewPlayers />} />
              </Route>
            </Route>
          </Route>

          {/* Login Registration */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
