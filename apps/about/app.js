var ENV = process.env;
var MEM = process.memory();
var s = require("Storage");

g.clear(1);
g.setFont("6x8");
var y = 24, h=8;
g.drawImage(require("heatshrink").decompress(atob("vE4gQZWg//AAI3Zh4dCoAd6wAd64Ad2j4d6l4dcn4dC6Adc+AdYv4dUggHG//kgN//AGB1WkDpkOAwsH/gDBgJ4CTRwdGl6RDl/0gHQgJeMDo2/AgcDIAIkBnAdRgJyCAAQdDlgdRgZPDgbWBDoUcDqMPRYcJgEfoA7Uh9AAgQ1BEgIdBngdRKQIACmBbB6AdB2gdRnoEDyB+C8tbbQVpgNAqOkAwMGyEQDoMB1AIBvgdDPYMC+H//7zBg//+fAA4OAgH//twDoMv/4WB3iyEAAPwHINvTYMAv/A/sC6BmBh/wDoP4gIuBdwayBAAP/DoMH4F4ToQSB+EPJQUOgKmDBgIABhAdFB4L7BgfAAYNwjpKChwJBTIQdDiAdFgHgAYIdDmDaCO4MD9Wq14dM+CdCDoU0nDjChyhBAAIdFsgdTZgaVDmPYLJk0LIodDaIcxcILRDSo80jiVECgUAvgDCmG0YQTRHDoTRBgLRCMwJDBnodDeAMDKoUvAIU/DocD6ELDoKRCAIM/LIcGG4PQUIKCBU4PzDoaEB/p3BFQKKCh9ADoXsKIVVqonCtVBoFQcAUKyFwghdB3IPBCwJZCAQMfEgQAL2AGFgZJBDoZgDABEMWYQJFgLwCkACB/gdLWYMCfoQAE35BEDpkH8EfdgYADl4mDl68BABazBFBA2CgK8CABcBUZP/8kBv58CAC1//4ABUQwASn4dgOxoALl4dC4AdYj4d6h4d+wAd6oAd2g4dCAwQA=")),120,y);
g.drawString("BANGLEJS.COM",120,y-4);
g.drawString("Powered by Espruino",0,y+=4+h);
g.drawString("Version "+ENV.VERSION,0,y+=h);
g.drawString("Commit "+ENV.GIT_COMMIT,0,y+=h);
function getVersion(name,file) {
  var j = s.readJSON(file,1);
  var v = ("object"==typeof j)?j.version:false;
  g.drawString(v?(name+" "+(v?"v"+v:"Unknown")):"NO "+name,0,y+=h);
}
getVersion("Bootloader","+boot");
getVersion("Launcher","+launch");
getVersion("Settings","+setting");

y+=h;
g.drawString(MEM.total+" JS Variables available",0,y+=h);
g.drawString("Storage: "+(require("Storage").getFree()>>10)+"k free",0,y+=h);
if (ENV.STORAGE) g.drawString("         "+(ENV.STORAGE>>10)+"k total",0,y+=h);
if (ENV.SPIFLASH) g.drawString("SPI Flash: "+(ENV.SPIFLASH>>10)+"k",0,y+=h);
g.setFontAlign(0,-1);
g.drawString(NRF.getAddress(),120,232);
g.flip();

// Pixel chooser 'test' image
g.drawImage(require("heatshrink").decompress(atob("+FQgnu93ACRkO9xU/AEkOhvd43PmV3v0Oh0Mk0GxGIxnMh2+gSIDs1my0LgGw4HP3+/4AOBs1gCAPu8EI/AACBAMHu4DBh47E5fLDQMPBQUMhgMChGIhWqKQvMZBcDgcQN5kM5hACu4hB4EN/tutHhv53DgFgO4OIh/O90MgR3DhMGhczO4hGB4FhCAXg8EPx4ACBIUHHoREF2CBC+ADB6AABBgWAhUKLQ0AhOf/hZB0Gg1QRCgcziCHEu66Cc4nuIAVw5uNO4LvB5OvO4nGd4WIwAkBOwPCgEGcQPuhe7O4X7/52B4DhCd4LRBd4p3DcgX/OATYGJYZ3Dd4x3GBoOgCIUDn0QUglweZR3BKYUINYPq9xuB3fbXgQADGAInBeAcO8DvD4BeDgFxd4gYCIQcHO4kKhjdCGQwbBAQMIO4QFBxG7B4jvMiISEd4QfCABEzmEI9GIx2u/BdBXYglBmAbJO4QpKZAfA5kAyBCCSgREB/n6d5AAExDzE2AyEO4gAFKIIHFd4WA0AtJnjvCs1u9TvBIYcNEoP+O5T8DLJZ3BcYMJHwQJCFILvEAB8IwDvFAAVQO4+jA4ruBgGKd5kO7vd7HY5pfBMIXg8DvMACEMZALuCO4cEAQP/+AgRwDvBO54dLd5RMCvp3BxHe6B3ChsHhsPmZNBhOZBIKLBDYngHR8Jd4MKzQHCgoCBh4UIQJMIxZ3bxDEN3wuBd4PPMwhnB/5cDAQMNDQkOhwGE5iSBO5EAyF61VwHxcP+EPxGPMaIAf5h3BgBHINop3EhAID4GA4EIUgMMOwvPFAKICTIN6vQvH4AYDO4P/AAIHChfrK5ibLhewO6JMCJoIID1WgaZH5O4eIhOQAwOAgEIQAgADL4J3F6AABHQ48DAA8H853NPAUM2G8BYh2SHQUI9CcFzIPE8BYBgBwCO4MIeoRrBDoJ6BgHMeAjvDg2eDYQ6JO5bvOu4DChoABO68MHQMO9zwFMAQAGbAQAId4UMOwgAEFAKWCABHADBIAUFoJYEO4O7O6PMd4YAD1J3CcQIqDhH/QQ8HEw5tHA4IJEVgJxEdxZxOTxcAhbwLcwLnBAA2PM4+JBAPuGIMP//wB413OxwdCO4pxBAQTpbO5gbOeRH4M48ATAjvJvyoGIo8KGQ7uB4AABPDaTbfBDwId4XgAQMPxCHCZ4jeBhuAOYYDDu9wgEJzWZgEN6HQgHQd6MPDIJ3vd4IGE95cChIVChAVF4HgZ4gNBdYgEC9gDCd4R1BPQRzBeARGKAYMJz5uf5hmFO5MP/57CAQPOJAsOwEEAoSABZ4zvB9ydG5w3CO4YADJhEN7qTEAQMPO50Hu54QKAeZB5ZQC4B0Bd4YAC9zvGgFwJB3M46NBzQ3BdgPQAQIPC+ELO4isCX4LBHABVwAAISPa4mQB5MI9GIwENHKQ2PG4TvCAA8O0B3EAgfgWIoAMu93H4sIYwQDDO4sJO5cO90AwDEBDQwZBACMIxIJHO5UNIJLuH5i1MW42AAY0AhgDCO5jvBDAI6FhkMSYQeEAAsMJIsIzAqHzQ2J4DEFd5YSBxB3RABB3DgGZCRmAwA6FO4IRHPIMP/4PCAYQMDvBCOLQ7uHeAylBbAgAEg93BRGwHKBmHhAvGdwUGswTGh/PB4X5OCi1BexLuDAQgAr4BnBABBKEO4UiO47rFACvQBZTsDeAwAnd44AKd4cN7oPJgZ2UO5YAR9vdf5cIhAeOhreCACkP14LJ4UiG4MIhYABgG72EL3YEDBQUA7p3E+DEOhhOIfxuAO5/Q5gpFJIQeEAIOQBIkHu7veY42IKJrFWACENPAJINAYUGux7GAETvQdxENO7sAO4sLAAITIg9nW4XNOUA4EO5A/GhnMAAR4FGSjlHO68Nh3gBIWQhOZfIkHuCxS6DRE4B3H3Z3FB44ACh4BB+H/GRndAIJGP2GwA4uAAwrvGhINFu93AYPMBYJaB1WgXZK6HAAakBO4wALh4ABPYQAphWq1RlBAAJ3H/PwgHdUwUM/KbC0B3F8AABXIK8BGRKtCW4wAKfYXAfwvwAAJrWhOYO5QBC/4ABCwmZyEAAQXt7zvEO5EOxzwDO40I9ADBLwqHMO4UMAQI2BNqcM/B3IxJ3NzIABUoIMDOgLvCxxaCAAW7gGqO4rwBAYXThswQgsOAYPXHhH+GoYYBDQoAFdoQADVQfA6ARE56XEd43MTQ8Hu93uAvEO4oASNQYAIhEIDRfuSQYAXhvdA4ruHMwLvC553IB4J3DhLxBAYR3UYwqEHB5jvFwDvKdQUP/4FDBYWwCQruGhcLO4UM//8fAgvIOIJzZAAUP57vHZY2tEJ+ALwUIDokPwCkHABDcBdwQABhOYd5IAC4HtgH/yHwz4tQd6H5/IjHO5btBd4ZyEOILvIJpl+d4oAChgUJhkOO4LvOnOTyZ8TzwkJ0DqLEprvRg/sAodwBoyhEAAndAQMJzIoLmczO4KZH4D0KYpNQS6YiFd4ruMIZSnGPhAoMnJ3C4AsFh/PCxLtBd5DOMZRAAehkOhzxFwAAChJ3Sc4ikGVY7/C/P5EphtBN455BeBYACcBoAQOwTvUO5YAZg5uGAwIIEhEId8EA9gEBh+/CZh3GhYkKAC2Zzt9vvX7rwFAAt3u7FFeJB8bh/7Cqew2C0fO4OQeBArgd50OhzvQABPM5gRRCRf/ZxLwHAF8ECKELK4X/Ch4RBCRfM4AKIeE0HE40PIw1AAIICBADkOAol3AALvVeFx3HdwNP+juO3e7B5nu8A9RzOQMUSwFTpx3HogABd5+gHpvu9wOL6BhThEIAgWAwAVO8CwSgEMtmGsDvEeAIAFhQbJZgw3BHAZ2BeBh3UOYJ8Dd7sHeIsM5h3FABEKcxoAChvdMahVKhSFVd6p3GtmIUgJ5Dgfn2D3EhT4HdwSCF9vNHBoARhsK7QYVhhEBAQLvMg8HRgwQHhYKGolAEZEJKo19B43s5x3Wd4KhFACp3MCiEIuD3BACvgAAIIF53sC5n/hBsaAEBTBfIL7GABMMhgECyEAYo1wCo3M5gDBhKoEBIIAB4HwxBOSwC9G5/wI4kA4BJDeC9wPB/AAAIIFu5zHd453F9wAC8DvUCY6WBDjTwGgEGd6jwCdRApFUYi/WAB3JO6cAwDvLdgTvMhMPh7wBA4Wgd4YVI3YuGhIGE93MPsi+ByDBChnMIw0IhAKBR47uCAB2f4HwBZDdQO5oMCyB9i5y+Ix3uN4zuBAATuMJgKiCO82QwEIB4sAh53bd5MOO4/oxCvhO6QAGwEJyEIAwXy/8gh/wChH/BYP/gHwRBkEF46CB4CCHSQoCBCI4AMJpMHAIgABuAeLOoJ5BdgYABl4zKOQR5BO6ZrDmAKGd4p3CAQUL3boZhlwAIcAhMOd5hLFO4XwUJIJBd4YPJd5R3KB4/A5h3C9Z3ZAAx3NyAQCESDqCOpoAgd7YAqfgI425nAOXDrBAHXAO4t/uDq/ADVwwABGd5YGF+5EoACkB0EA0Iok2EwAIbvqhwUTHgI9FAAMJhKglhAAEBYsHDqELAAIMJ6ENAQft8BERhoABAgQLFwB3ldwmwBYtwdaOIIwwhGd5kL1WgBI2AAALvBDBIbD3ZrSg1m9y0Sd5sN7AGEhAFE3ZFB74uR3erO47sEd4kJhIDBzIHChWqFp6WCO4Nm8EIwGIAQIaOhYFE+AABYYjnFdAZ1B2EMUyW7d6UJyB4ByCvDxAlHgUwBoWM5nH4/M4B3Bt1gZAOAZYoAKVYR3Id4xhGd6kL1aUDd55EBd4YAEPgktkAICx///n84tQTIbvTyCpDh4ABd4gANMJIATd4QEBh3e6B3EIogWIh8yBAUM5jvC4vg8A+Wd4oA/RxzEIh3u")),0,135);
g.flip();
