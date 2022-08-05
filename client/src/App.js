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
import TwoTeams from "./Components/Dashboards/DashboardSetup/DashBoardHome/Bracket/Two/TwoTeams";
import FourTeams from "./Components/Dashboards/DashboardSetup/DashBoardHome/Bracket/FourTeams/FourTeams";
import EightTeams from "./Components/Dashboards/DashboardSetup/DashBoardHome/Bracket/EightTeams/EightTeams";
import CreateTournaments from "./Components/Dashboards/TournamentDashBoard/CreateTournaments/CreateTournaments";
import DashboardContent from "./Components/Dashboards/DashboardSetup/DashBoardHome/DashboardContents/DashboardContent";
import ProfileDetails from "./Components/Dashboards/ProfileDashboard/ProfileDetails/ProfileDetails";
import AddRolePage from "./Components/Dashboards/ProfileDashboard/AddRolePage/AddRolePage";
import AllPlayers from "./Components/Dashboards/PlayerDashbaord/AllPlayers/AllPlayers";
import NewPlayers from "./Components/Dashboards/PlayerDashbaord/NewPlayers/NewPlayers";
import YourTournaments from "./Components/Dashboards/TournamentDashBoard/YourTournaments/YourTournaments";
import AdminRoute from "./Components/Auth/Login/AdminRoute/AdminRoute";

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
                <Route path="" element={<DashboardContent />} />
              </Route>

              <Route path="profile" element={<ProfileDashboard />}>
                <Route path="" element={<ProfileDetails />} />

                <Route element={<AdminRoute />}>
                  <Route path="add-role" element={<AddRolePage />} />
                </Route>
              </Route>

              <Route path="tournament" element={<TournamentDashBoard />}>
                <Route element={<AdminRoute />}>
                  <Route path="" element={<CreateTournaments />} />
                  <Route path="two-team" element={<TwoTeams />} />
                  <Route path="four-team" element={<FourTeams />} />
                  <Route path="eight-team" element={<EightTeams />} />
                </Route>
                <Route path="" element={<YourTournaments />} />
              </Route>

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
