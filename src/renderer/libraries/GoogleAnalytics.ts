import UA from "universal-analytics";
import IsDev from "electron-is-dev";
import { Settings } from "./Settings";
import { remote } from "electron";

/**
 * Allows events to be sent to Google Analytics for tracking application
 * usage. Note that no personal information is forwarded in events.
 */
export class GoogleAnalytics {
  // Google Analytics property where events are sent.
  static GA_PROPERTY_ID: string = "UA-122806506-2";

  constructor() {}

  /**
   * Send an event indicating the application has started.
   * @param settings
   */
  public static sendStartupEvent(settings: Settings): void {
    const google = GoogleAnalytics.targetUser(settings);
    if (!IsDev) {
      google
        .event({
          ec: "AdminApplication",
          ea: "StartedVersion",
          el: !IsDev ? remote.app.getVersion() : "2.0.0"
        })
        .send();
    }
  }

  /**
   * Create UA context based on user in settings.
   * @param settings
   */
  public static targetUser(settings: Settings): UA.Visitor {
    return UA(GoogleAnalytics.GA_PROPERTY_ID, settings.userId);
  }
}
