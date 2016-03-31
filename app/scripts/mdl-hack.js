(function () {
  
  function setIntervalSyncMDL() {
    setInterval("syncMDL();", 200);
  }

  function syncMDL() {
    componentHandler.downgradeAllComponentThatNotInClass();
    componentHandler.upgradeDom();
  }

  /**
   * Downgrade all component that cssClass Not In element's class 
   *
   * @param {*} nodes
   */
  function downgradeAllComponentThatNotInClassInternal() {

    for (var n = 0; n < createdComponents_.length; n++) {
      var component = createdComponents_[n];
      if (!component.element_.classList.contains(component[componentConfigProperty_].cssClass)) {
        deconstructComponentInternal(component);
      }
    }
  }

  // Now return the functions that should be made public with their publicly
  // facing names...
  return {
    upgradeDom: upgradeDomInternal,
    upgradeElement: upgradeElementInternal,
    upgradeAllRegistered: upgradeAllRegisteredInternal,
    registerUpgradedCallback: registerUpgradedCallbackInternal,
    register: registerInternal,
    downgradeElements: downgradeNodesInternal,
    downgradeAllComponentThatNotInClass: downgradeAllComponentThatNotInClassInternal
  };

}());
