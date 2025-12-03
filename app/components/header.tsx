"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import NotificationBoard from "./NotificationBoard" // Add this import

// Extend Window interface to include stopNotifications
declare global {
  interface Window {
    stopNotifications?: () => void
  }
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("make-payment")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const profileRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { id: "make-payment", label: "Make Payment", path: "/#make-payment" },
    { id: "add-money", label: "Add Money", path: "/#add-money" },
    { id: "check-payment-history", label: "Payment History", path: "/payment-history" },
    { id: "how-it-works", label: "How It Works", path: "/#how-it-works" },
    { id: "account", label: "Account", path: "/account-details" },
    { id: "help", label: "Help", path: "/help" },
  ]

  // Enhanced notifications with time and icons
  interface Notification {
    id: number
    message: string
    time: string
    type: 'payment' | 'offer' | 'wallet' | 'subscription' | 'security' | 'info'
    read: boolean
  }

  const notifications: Notification[] = [
    { 
      id: 1, 
      message: "Payment Successful", 
      time: "2 min ago",
      type: 'payment',
      read: false
    },
    { 
      id: 2, 
      message: "New Offer Available", 
      time: "1 hour ago",
      type: 'offer',
      read: false
    },
    { 
      id: 3, 
      message: "Wallet Credited", 
      time: "3 hours ago",
      type: 'wallet',
      read: true
    },
    { 
      id: 4, 
      message: "Subscription Due", 
      time: "1 day ago",
      type: 'subscription',
      read: false
    },
    { 
      id: 5, 
      message: "Security Alert", 
      time: "2 days ago",
      type: 'security',
      read: false
    },
    { 
      id: 6, 
      message: "System Update Completed", 
      time: "3 days ago",
      type: 'info',
      read: true
    },
  ]

  // Profile avatar image path
  const avatarImagePath = "/images/student-avatar4.jpg"

  // Icon component for nav items
  const NavIcon = ({ id, className }: { id: string; className?: string }) => {
    const iconClass = className || "w-4 h-4"
    switch (id) {
      case "make-payment":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case "add-money":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )
      case "check-payment-history":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        )
      case "how-it-works":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case "account":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )
      case "help":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )
      default:
        return null
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach(({ id, path }) => {
        if (path.startsWith("/#")) {
          const el = document.getElementById(id)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 120 && rect.bottom >= 120) setActiveSection(id)
          }
        } else if (pathname === path) {
          setActiveSection(id)
        }
      })
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname, navItems])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // Close notification dropdown when clicking outside
      if (dropdownOpen && notificationRef.current && !notificationRef.current.contains(target) && !target.closest(".notification-bell")) {
        setDropdownOpen(false)
      }

      // Close profile dropdown when clicking outside
      if (profileDropdownOpen && profileRef.current && !profileRef.current.contains(target) && !target.closest(".profile-avatar-button")) {
        setProfileDropdownOpen(false)
      }

      // Close mobile menu when clicking outside
      if (mobileMenuOpen && !target.closest(".mobile-menu-sidebar") && !target.closest(".hamburger-button")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen, profileDropdownOpen, mobileMenuOpen])

  const handleNavClick = (path: string, id?: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (path.startsWith("/#") && pathname === "/") {
      const el = document.getElementById(id!)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(path)
    }
  }

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    router.push("/login")
  }

  const handleBellClick = () => {
    if (window.stopNotifications) {
      window.stopNotifications()
    }
    setDropdownOpen(!dropdownOpen)
  }

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setProfileDropdownOpen(!profileDropdownOpen)
    // Close notification dropdown if open
    if (dropdownOpen) {
      setDropdownOpen(false)
    }
  }

  const handleLogout = () => {
    setProfileDropdownOpen(false)
    console.log("Logging out...")
  }

  const handleProfile = () => {
    setProfileDropdownOpen(false)
    console.log("Navigating to profile...")
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const markNotificationAsRead = (id: number) => {
    console.log(`Marking notification ${id} as read`)
  }

  // Animation variants for sidebar
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        duration: 0.4,
      },
    },
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Staggered animation for nav items in sidebar
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  }

  // Notification Bell Component - Mobile Responsive
  const NotificationBell = () => (
    <div className="relative notification-bell" ref={notificationRef}>
      <button
        type="button"
        aria-label="Notifications"
        onClick={handleBellClick}
        className="relative focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-yellow-200 transition"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <motion.span
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.4],
          }}
        >
          {notifications.filter(n => !n.read).length}
        </motion.span>
      </button>

      {/* Use the extracted NotificationBoard component */}
      <NotificationBoard 
        dropdownOpen={dropdownOpen} 
        notifications={notifications} 
        onMarkAsRead={markNotificationAsRead} 
      />
    </div>
  )

  return (
    <>
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        /* Prevent body scroll when sidebar is open */
        body.sidebar-open {
          overflow: hidden;
        }
        /* Custom scrollbar for notifications */
        .notification-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .notification-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .notification-scrollbar::-webkit-scrollbar-thumb {
          background: #fbbf24;
          border-radius: 2px;
        }
        .notification-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f59e0b;
        }
      `}</style>

      <header className="bg-yellow-500 text-white sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <span className="text-xl font-bold text-black">SunPay</span>

          {/* Desktop Navigation - New Design with Icons and Pill Active State */}
          <nav className="hidden lg:flex items-center">
            {navItems.map(({ id, label, path }) => (
              <a
                key={id}
                href={path}
                onClick={handleNavClick(path, id)}
                className={`
                  flex items-center gap-2 px-4 py-2 mx-1 text-sm font-medium transition-all duration-200 rounded-full
                  ${activeSection === id ? "bg-white text-yellow-600 shadow-lg" : "text-black hover:text-yellow-800"}
                `}
              >
                <NavIcon id={id} className="w-4 h-4" />
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <NotificationBell />
            <div className="relative profile-avatar-container" ref={profileRef}>
              <button
                type="button"
                aria-label="Profile menu"
                onClick={handleProfileClick}
                className="flex flex-col items-center justify-center focus:outline-none group profile-avatar-button"
              >
                {/* Avatar Container */}
                <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-white/50 hover:border-white transition-colors mb-0.5">
                  {!imageError ? (
                    <Image
                      src={avatarImagePath || "/placeholder.svg"}
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                      priority={false}
                    />
                  ) : (
                    <div className="w-full h-full bg-white text-yellow-600 font-semibold text-sm flex items-center justify-center">
                      T
                    </div>
                  )}
                </div>
                
                {/* "Taiwo" text - only visible on web view (lg and above) */}
                <span className="hidden lg:block text-[10px] text-white/90 font-medium tracking-tight mt-0.5 group-hover:text-white transition-colors">
                  Taiwo
                </span>
              </button>

              <AnimatePresence>
                {profileDropdownOpen && (
                  <motion.div
                    className="absolute right-0 left-auto transform mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                    }}
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="py-1">
                      {/* Profile Header with Taiwo name */}
                      <div className="px-4 py-3 border-b border-gray-100 bg-yellow-50 rounded-t-lg">
                        <p className="text-sm font-medium text-gray-900">Taiwo</p>
                        <p className="text-xs text-gray-500">Account</p>
                      </div>
                      
                      <button
                        onClick={handleProfile}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 transition-colors flex items-center gap-2 mt-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Log Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              aria-label="Sign In"
              onClick={handleSignIn}
              className="bg-black border border-yellow-400 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>

            <NotificationBell />
            
            {/* Profile Avatar for Mobile without dropdown in header */}
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                aria-label="Profile menu"
                onClick={handleProfileClick}
                className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border-2 border-white/50 hover:border-white transition-colors focus:outline-none profile-avatar-button"
              >
                {!imageError ? (
                  <Image
                    src={avatarImagePath || "/placeholder.svg"}
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    priority={false}
                  />
                ) : (
                  <div className="w-full h-full bg-white text-yellow-600 font-semibold text-sm flex items-center justify-center">
                    T
                  </div>
                )}
              </button>

              {/* Profile Dropdown for Mobile */}
              <AnimatePresence>
                {profileDropdownOpen && (
                  <motion.div
                    className="absolute right-0 left-auto mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                    }}
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="py-1">
                      {/* Profile Header with Taiwo name */}
                      <div className="px-4 py-3 border-b border-gray-100 bg-yellow-50 rounded-t-lg">
                        <p className="text-sm font-medium text-gray-900">Taiwo</p>
                        <p className="text-xs text-gray-500">Account</p>
                      </div>
                      
                      <button
                        onClick={handleProfile}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 transition-colors flex items-center gap-2 mt-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Log Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:bg-yellow-400 rounded-lg transition-colors hamburger-button"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="lg:hidden fixed inset-0 bg-black/50 z-50"
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Sidebar Menu */}
              <motion.div
                className="lg:hidden fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-yellow-500 shadow-xl z-50 mobile-menu-sidebar notification-scrollbar"
                variants={sidebarVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Sidebar Header with Taiwo name */}
                <div className="flex items-center justify-between p-6 border-b border-yellow-600">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-white/50">
                      {!imageError ? (
                        <Image
                          src={avatarImagePath || "/placeholder.svg"}
                          alt="User avatar"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          priority={false}
                        />
                      ) : (
                        <div className="w-full h-full bg-white text-yellow-600 font-semibold text-sm flex items-center justify-center">
                          T
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-black">Taiwo</p>
                      <p className="text-xs text-gray-700">Account</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-yellow-400 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links - NO NOTIFICATION BELL HERE */}
                <motion.nav
                  className="flex flex-col p-4"
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navItems.map(({ id, label, path }) => (
                    <motion.a
                      key={id}
                      href={path}
                      onClick={handleNavClick(path, id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium transition-all ${
                        activeSection === id
                          ? "bg-white text-yellow-600 shadow-lg"
                          : "text-black hover:bg-yellow-400 hover:shadow-sm"
                      }`}
                      variants={itemVariants}
                      whileHover={{
                        x: -8,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon for each nav item */}
                      <div className="w-6 h-6 flex items-center justify-center">
                        <NavIcon id={id} />
                      </div>
                      {label}
                    </motion.a>
                  ))}
                </motion.nav>

                {/* Sidebar Footer - REMOVED NOTIFICATION BELL FROM HERE */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-yellow-600 bg-yellow-500">
                  <div className="space-y-4">
                    <button
                      onClick={handleSignIn}
                      className="w-full bg-black border border-yellow-400 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-md"
                    >
                      Sign In to Account
                    </button>
                    <p className="text-xs text-center text-gray-700 mt-4">
                      Need help?{" "}
                      <a href="/help" className="font-semibold hover:underline">
                        Contact Support
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
