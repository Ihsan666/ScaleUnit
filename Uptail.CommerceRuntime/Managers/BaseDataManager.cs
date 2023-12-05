using Microsoft.Dynamics.Commerce.Runtime; 

namespace Uptail.CommerceRuntime.Managers
{
    public abstract class BaseDataManager
    {
        protected BaseDataManager(RequestContext requestContext)
        {
            ThrowIf.Null(requestContext, nameof(requestContext));
            Context = requestContext;
        }

        public RequestContext Context { get; }
        public long CurrentChannelId => this.Context.GetPrincipal().ChannelId;
    }
}
