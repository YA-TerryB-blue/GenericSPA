import * as React from "react";
import { Tab, TabList, Text } from "@fluentui/react-components";
import { HomeRegular, HomeFilled, DocumentRegular, DocumentFilled, MailRegular, MailFilled, MoreHorizontalRegular, MoreHorizontalFilled } from "@fluentui/react-icons";
import { bundleIcon } from "@fluentui/react-icons";
import styles from "./NavBar.module.scss";

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const DocumentIcon = bundleIcon(DocumentFilled, DocumentRegular);
const MailIcon = bundleIcon(MailFilled, MailRegular);
const HamburgerIcon = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);  // Hamburger icon

interface NavbarProps {
  userName: string;
  selectedValue: string;
  onTabSelect: (
    event: React.MouseEvent<HTMLElement>,
    data: { value: string }
  ) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  userName,
  selectedValue,
  onTabSelect,
}) => {
  const [menuVisible, setMenuVisible] = React.useState(false); // State to toggle menu visibility

  const navbarItems = [
    { label: "Home", value: "home", icon: <HomeIcon /> },
    { label: "Documents", value: "documents", icon: <DocumentIcon /> },
    { label: "Emails", value: "emails", icon: <MailIcon /> },
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Toggle menu visibility
  };

  return (
    <div className={styles.navbar}>
      <Text as="h1" className={styles.navbarTitle}>
        Hi, {userName}
      </Text>
      <div className={styles.navLinks}>
        <TabList className={`${styles.tabList} ${menuVisible ? styles.menuVisible : ''}`} selectedValue={selectedValue} onTabSelect={onTabSelect}>
          {navbarItems.map((item, index) => (
            <Tab key={index} className={styles.tab} value={item.value} icon={item.icon}>
              {item.label}
            </Tab>
          ))}
        </TabList>
        {/* Hamburger Menu Icon */}
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <HamburgerIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
